import React, { createContext, useContext, useCallback, useMemo } from 'react'
import type { FilterType, Task, TaskContextType, Theme } from '../types'
import { useLocalStorage } from '../hooks/useLocalStorage'

const TaskContext = createContext<TaskContextType | undefined>(undefined)

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', [])
  const [filter, setFilter] = useLocalStorage<FilterType>('filter', 'all')
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'light')

  const addTask = useCallback((text: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      text: text.trim(),
      completed: false,
      createdAt: Date.now(),
    }
    setTasks((prevTasks) => [...prevTasks, newTask])
  }, [setTasks])

  const toggleTask = useCallback((id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }, [setTasks])

  const deleteTask = useCallback((id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }, [setTasks])

  const reorderTasks = useCallback((startIndex: number, endIndex: number) => {
    setTasks((prevTasks) => {
      const result = Array.from(prevTasks)
      const [removed] = result.splice(startIndex, 1)
      result.splice(endIndex, 0, removed)
      return result
    })
  }, [setTasks])

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }, [setTheme])

  const value = useMemo(
    () => ({
      tasks,
      addTask,
      toggleTask,
      deleteTask,
      reorderTasks,
      filter,
      setFilter,
      theme,
      toggleTheme,
    }),
    [tasks, addTask, toggleTask, deleteTask, reorderTasks, filter, setFilter, theme, toggleTheme]
  )

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}

export const useTaskContext = () => {
  const context = useContext(TaskContext)

  if (context === undefined) {
    throw new Error('useTaskContext must be used within a TaskProvider')
  }
  return context
}
