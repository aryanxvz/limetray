import './App.css';
import { useEffect } from 'react';
import { TaskProvider, useTaskContext } from './context/task-context';
import { Header } from './componenets/header';
import { TaskStats } from './componenets/task-status';

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
