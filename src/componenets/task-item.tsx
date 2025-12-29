import React, { useCallback } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { Task } from '../types';
import { useTaskContext } from '../context/task-context';

interface TaskItemProps {
  task: Task
  index: number
}

export const TaskItem: React.FC<TaskItemProps> = React.memo(({ task }) => {
  const { toggleTask, deleteTask } = useTaskContext()

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: task.id })

  const sortableStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const handleToggle = useCallback(() => {
    toggleTask(task.id)
  }, [toggleTask, task.id])

  const handleDelete = useCallback(() => {
    deleteTask(task.id)
  }, [deleteTask, task.id])

  return (
    <div ref={setNodeRef} style={sortableStyle}
      {...attributes} {...listeners}
      className={`flex items-center justify-between gap-4 px-4 py-3 rounded-lg border mb-3 transition-all duration-200
        ${task.completed 
          ? 'bg-slate-100/50 dark:bg-neutral-900/30 border-slate-200 dark:border-neutral-800' 
          : 'bg-slate-50 dark:bg-neutral-900 border-slate-200 dark:border-neutral-800 hover:border-blue-500 dark:hover:border-blue-500'
        }
        ${isDragging ? 'opacity-50 shadow-lg' : ''}
      `}>
      
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <input type="checkbox"
          checked={task.completed} onChange={handleToggle}
          className="w-5 h-5 cursor-pointer accent-blue-500 dark:accent-blue-600"/>
        <span className={`text-base text-slate-900 dark:text-neutral-100 transition-all duration-200
          ${task.completed ? 'line-through opacity-50' : ''}`}>
          {task.text}
        </span>
      </div>

      <button onClick={handleDelete}
        className="p-2 text-slate-500 dark:text-neutral-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 rounded transition-all duration-200 active:scale-95">
        ✕
      </button>
    </div>
  )
})