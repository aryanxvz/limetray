import React, { useMemo } from 'react';
import { useTaskContext } from '../context/task-context';
import { ListTodo, Clock, CheckCircle2 } from 'lucide-react';

export const TaskStats: React.FC = React.memo(() => {
  const { tasks } = useTaskContext()

  const taskStats = useMemo(() => {
    const total = tasks.length
    const completed = tasks.filter((task) => task.completed).length
    const pending = total - completed
    return { total, completed, pending }
  }, [tasks])

  return (
    <div className="grid grid-cols-3 gap-4 sm:gap-3 mb-6">

      <div className="flex flex-col gap-1 p-4 sm:p-3 rounded-lg bg-slate-50 dark:bg-neutral-900/50 border border-slate-200 dark:border-neutral-800">
        <div className="flex items-center gap-2 mb-1">
          <ListTodo className="w-4 h-4 text-slate-500 dark:text-neutral-500" />
          <span className="text-xs font-medium text-slate-600 dark:text-neutral-400">Total</span>
        </div>
        <span className="text-2xl sm:text-xl font-semibold text-slate-900 dark:text-neutral-100">{taskStats.total}</span>
      </div>

      <div className="flex flex-col gap-1 p-4 sm:p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30">
        <div className="flex items-center gap-2 mb-1">
          <Clock className="w-4 h-4 text-amber-600 dark:text-amber-500" />
          <span className="text-xs font-medium text-amber-700 dark:text-amber-400">Pending</span>
        </div>
        <span className="text-2xl sm:text-xl font-semibold text-amber-900 dark:text-amber-300">{taskStats.pending}</span>
      </div>

      <div className="flex flex-col gap-1 p-4 sm:p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/30">
        <div className="flex items-center gap-2 mb-1">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
          <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">Completed</span>
        </div>
        <span className="text-2xl sm:text-xl font-semibold text-emerald-900 dark:text-emerald-300">{taskStats.completed}</span>
      </div>
      
    </div>
  )
})
