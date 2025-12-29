
export interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

export type FilterType = 'all' | 'completed' | 'pending';

export interface TaskContextType {
  tasks: Task[];
  addTask: (text: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  reorderTasks: (startIndex: number, endIndex: number) => void;
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
  toggleTheme: () => void;
}
