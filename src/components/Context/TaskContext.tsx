import { createContext, useState, PropsWithChildren } from "react";

// Define the type for the context

type TaskType = {
  title: string;
  description: string;
  date: string;
  completed: boolean;
  id: string;
};

export type TaskContextType = {
  taskList: TaskType[];
  toggleTaskCompletion: (id: string) => void;
  deleteTask: (id: string) => void;
};

// Create the context
export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);

// Create the ThemeProvider component
const TaskProvider = ({ children }: PropsWithChildren) => {
  const [task, setTask] = useState<TaskType[]>([
    {
      title: "eat",
      description: "desctest",
      date: "2020",
      completed: false,
      id: "b6a9ab22-e4e5-4da7-8945-5b52adf515b3",
    },
    {
      title: "drink",
      description: "desctest",
      date: "2020",
      completed: false,
      id: "3df14ce2-7e27-4d7c-abd2-35ba5c013a85",
    },
    {
      title: "test2",
      description: "desctest",
      date: "2020",
      completed: true,
      id: "6aea0722-aeeb-482a-a093-b045c91f6d42",
    },
  ]);

  const toggleTaskCompletion = (id: string) => {
    const findTask = task.find((e) => e.id === id);
    if (!findTask) return;
    const isDone = !findTask.completed;
    const updatedTask = task.map((e) =>
      e.id === id ? { ...e, completed: isDone } : e
    );

    setTask([...updatedTask]);
    console.log(task);
  };

  const deleteTask = (id: string) => {
    const filteredTask = task.filter((e) => e.id !== id);
    console.log(filteredTask);
    setTask([...filteredTask]);
  };

  const contextValue: TaskContextType = {
    taskList: task,
    toggleTaskCompletion,
    deleteTask,
  };

  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  );
};

export { TaskProvider };
