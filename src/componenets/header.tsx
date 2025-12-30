import React from 'react';
import { useTaskContext } from '../context/task-context';
import { Moon, Sun } from 'lucide-react';

export const Header: React.FC = React.memo(() => {
  const { theme, toggleTheme } = useTaskContext()

  return (
    <header className="mb-4 sm:mb-8 border-b border-slate-200 dark:border-neutral-800 py-3 px-3">

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <h1 className="pl-2 text-3xl md:text-2xl sm:text-xl font-semibold text-slate-900 dark:text-neutral-100">
            Task Manager
          </h1>
        </div>

        <button onClick={toggleTheme}
          className="p-2 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-700 rounded-lg cursor-pointer transition-all duration-200 hover:bg-slate-100 dark:hover:bg-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 active:scale-95">
          {theme === 'light' ? (
            <Moon className="w-5 h-5 text-slate-700 dark:text-neutral-300" />
          ) : (
            <Sun className="w-5 h-5 text-slate-700 dark:text-neutral-300" />
          )}
        </button>
      </div>

    </header>
  )
})
