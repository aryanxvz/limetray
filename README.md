# Limetray assignment - Task Manager App

A task management application built with React, TypeScript and modern web technologies.

## Features

### Basic Features
- ✅ Add tasks with validation
- ✅ Mark tasks as completed
- ✅ Delete tasks
- ✅ Filter tasks (All, Completed, Pending)
- ✅ Persistent storage using Local Storage

### Advanced React Features
- ✅ **Custom Hooks**: `useLocalStorage` for handling local storage operations
- ✅ **Context API**: Centralized state management without prop drilling
- ✅ **Performance Optimization**: 
  - `React.memo` for component memoization
  - `useCallback` for function memoization
  - `useMemo` for computed values
- ✅ **Form Validation**: Prevents empty tasks and requires minimum 3 characters

### Advanced CSS Features
- ✅ **Dark/Light Mode**: Toggle between themes with smooth transitions
- ✅ **Animations**: CSS transitions for adding/removing tasks
- ✅ **Responsive Design**: Mobile-first approach with breakpoints
- ✅ **Drag-and-Drop**: Reorder tasks using react-beautiful-dnd

## Technologies Used
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **dnd-kit** - Drag and drop functionality
- **Tailwind CSS** - Styling

## Installation
1. Clone the repository:
```bash
git clone https://github.com/aryanxvz/limetray
cd linetray
```
2. Install dependencies:
```bash
npm install
```
3. Run the development server:
```bash
npm run dev
```
4. Open your browser and navigate to `http://localhost:5173`

## Project Structure
```
src/
├── components/
│   ├── header.tsx
│   ├── task-input.tsx
│   ├── task-filter.tsx
│   ├── task-list.tsx
│   ├── task-item.tsx
│   └── task-status.tsx
├── context/
│   └── task-context.tsx
├── hooks/
│   └── useLocalStorage.ts
├── types/
│   └── index.ts
├── App.tsx
├── App.css
├── main.tsx
└── index.css
```

## Key Functionalities
1. **Add Task**: Enter task text (minimum 3 characters) and click "Add Task"
2. **Complete Task**: Click the checkbox to toggle completion status
3. **Delete Task**: Click the ✕ button to remove a task
4. **Filter Tasks**: Use the filter buttons to view All, Pending, or Completed tasks
5. **Reorder Tasks**: Drag and drop tasks to reorder them
6. **Toggle Theme**: Click the theme button (🌙/☀️) to switch between dark and light modes

### Responsive Design
- Mobile-first approach
- Flexible layouts with Flexbox
- Touch-friendly UI elements
- Breakpoint at 640px for mobile devices


## Build for Production
```bash
npm run build
```

The build output will be in the `dist/` folder.


## Made by
Aryan Mane

---
Using React + TypeScript + Vite