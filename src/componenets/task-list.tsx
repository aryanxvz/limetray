import React, { useMemo } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useTaskContext } from '../context/task-context';
import { TaskItem } from './task-item';

export const TaskList: React.FC = React.memo(() => {
  const { tasks, filter, reorderTasks } = useTaskContext()

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'completed':
        return tasks.filter((task) => task.completed)
      case 'pending':
        return tasks.filter((task) => !task.completed)
      default:
        return tasks
    }
  }, [tasks, filter])

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (!over || active.id === over.id) return

    const oldIndex = filteredTasks.findIndex((task) => task.id === active.id)
    const newIndex = filteredTasks.findIndex((task) => task.id === over.id)

    if (oldIndex !== -1 && newIndex !== -1) {
      reorderTasks(oldIndex, newIndex)
    }
  }

  if (filteredTasks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-slate-500 dark:text-neutral-400">
          {filter === 'completed'
            ? 'No completed tasks yet'
            : filter === 'pending'
            ? 'No pending tasks'
            : 'No tasks yet. Add one to get started!'}
        </p>
      </div>
    )
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext
        items={filteredTasks.map((task) => task.id)}
        strategy={verticalListSortingStrategy}>
        <div>
          {filteredTasks.map((task, index) => (
            <TaskItem key={task.id} task={task} index={index} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  )
})
