import { createContext, useState, PropsWithChildren, useEffect } from "react";

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

const TASK_KEY = "TO_DO_LIST";

const TaskProvider = ({ children }: PropsWithChildren) => {
  const [task, setTask] = useState<TaskType[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem(TASK_KEY);

    if (storedData) {
      const retrievedArray = JSON.parse(storedData);
      setTask(retrievedArray);
    }
  }, []);

  const addTask = (newTask: TaskType) => {
    const updatedTask = [...task, newTask];
    setTask([...updatedTask]);
    localStorage.setItem(TASK_KEY, JSON.stringify(updatedTask));
  };

  const toggleTaskCompletion = (id: string) => {
    const findTask = task.find((e) => e.id === id);
    if (!findTask) return;
    const isDone = !findTask.completed;
    const updatedTask = task.map((e) =>
      e.id === id ? { ...e, completed: isDone } : e
    );

    setTask([...updatedTask]);
    localStorage.setItem(TASK_KEY, JSON.stringify(updatedTask));
  };

  const deleteTask = (id: string) => {
    const filteredTask = task.filter((e) => e.id !== id);
    setTask([...filteredTask]);

    localStorage.setItem(TASK_KEY, JSON.stringify(filteredTask));
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
