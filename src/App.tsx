import './App.css';
import { useEffect } from 'react';
import { TaskProvider, useTaskContext } from './context/task-context';
import { Header } from './componenets/header';
import { TaskStats } from './componenets/task-status';
import { TaskInput } from './componenets/task-input';
import { TaskFilter } from './componenets/task-filter';
import { TaskList } from './componenets/task-list';

function AppContent() {
  const { theme } = useTaskContext()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className="">
      <Header />
      <div className="max-w-6xl mx-auto px-4">
        <TaskStats />
        <TaskInput />
        <TaskFilter />
        <TaskList />
      </div>
    </div>
  )
}

function App() {
  return (
    <TaskProvider>
      <AppContent />
    </TaskProvider>
  )
}

export default App
