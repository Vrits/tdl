import { createContext, useState, PropsWithChildren } from "react";

export type TaskType = {
  title: string;
  description: string;
  date: string;
  completed: boolean;
  id: string;
};

export type TaskContextType = {
  taskList: TaskType[];
  addTask: (newTask: TaskType) => void;
  toggleTaskCompletion: (id: string) => void;
  deleteTask: (id: string) => void;
};

export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);

const TaskProvider = ({ children }: PropsWithChildren) => {
  const [task, setTask] = useState<TaskType[]>([]);

  const addTask = (newTask: TaskType) => {
    const updatedTask = [...task, newTask];
    setTask([...updatedTask]);
  };

  const toggleTaskCompletion = (id: string) => {
    const findTask = task.find((e) => e.id === id);
    if (!findTask) return;
    const isDone = !findTask.completed;
    const updatedTask = task.map((e) =>
      e.id === id ? { ...e, completed: isDone } : e
    );

    setTask([...updatedTask]);
  };

  const deleteTask = (id: string) => {
    const filteredTask = task.filter((e) => e.id !== id);
    setTask([...filteredTask]);
  };

  const contextValue: TaskContextType = {
    taskList: task,
    addTask,
    toggleTaskCompletion,
    deleteTask,
  };

  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  );
};

export { TaskProvider };
