import React, { useState, useCallback } from 'react';
import { useTaskContext } from '../context/task-context';

export const TaskInput: React.FC = React.memo(() => {
  const [input, setInput] = useState('')
  const [error, setError] = useState('')
  const { addTask } = useTaskContext()

  const handleSubmit = useCallback(
    (e?: React.FormEvent) => {
      if (e) e.preventDefault()

      if (!input.trim()) {
        setError('Task cannot be empty')
        return
      }

      if (input.trim().length < 3) {
        setError('Task must be at least 3 characters')
        return
      }

      addTask(input)
      setInput('')
      setError('')
    },
    [input, addTask]
  )

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value)
      if (error) setError('')
    },
    [error]
  )

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleSubmit()
      }
    },
    [handleSubmit]
  )

  return (
    <div className="mb-6 animate-slideDown">
      <div className="flex flex-col sm:flex-row gap-3">
        <input type="text" placeholder="Add a new task..."
          value={input} onChange={handleInputChange} onKeyPress={handleKeyPress}
          className={`flex-1 px-4 py-3 rounded-lg border transition-all duration-200 outline-none
            bg-slate-50 dark:bg-neutral-900 text-slate-900 dark:text-neutral-100
            ${
              error
                ? 'border-red-500 dark:border-red-500 focus:border-red-500 dark:focus:border-red-500 shake'
                : 'border-slate-200 dark:border-neutral-800 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
            }
          `}
        />

        <button type="button" onClick={() => handleSubmit()}
          className="px-6 py-3 font-medium text-white rounded-lg bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-all duration-200 active:scale-95 shadow-lg hover:shadow-xl cursor-pointer">
          Add Task
        </button>
      </div>

      {error && (
        <p className="text-sm mt-2 text-red-500 dark:text-red-400 animate-slideDown">
          {error}
        </p>
      )}
    </div>
  )
})
