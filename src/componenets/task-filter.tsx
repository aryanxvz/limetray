import React, { useCallback } from 'react';
import { useTaskContext } from '../context/task-context';
import type { FilterType } from '../types';

export const TaskFilter: React.FC = React.memo(() => {
  const { filter, setFilter } = useTaskContext()

  const handleFilterChange = useCallback(
    (newFilter: FilterType) => {
      setFilter(newFilter)
    },
    [setFilter]
  )

  const FilterButton = ({ value, label }: { value: FilterType; label: string }) => {
    const isActive = filter === value

    return (
      <button
        onClick={() => handleFilterChange(value)}
        className={`px-6 py-1.5 sm:py-2 font-medium rounded-lg border transition-all duration-200
          ${
            isActive
              ? 'bg-blue-500 dark:bg-blue-600 text-white border-blue-500 dark:border-blue-600 shadow-lg'
              : 'bg-slate-50 dark:bg-neutral-900 text-slate-700 dark:text-neutral-300 border-slate-200 dark:border-neutral-800 hover:border-blue-500 dark:hover:border-blue-500'
          }
        `}>
        {label}
      </button>
    )
  }

  return (
    <div className="flex flex-wrap gap-3 mb-6">
      <FilterButton value="all" label="All" />
      <FilterButton value="pending" label="Pending" />
      <FilterButton value="completed" label="Completed" />
    </div>
  )
})
