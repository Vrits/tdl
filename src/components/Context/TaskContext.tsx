import { createContext, useState, PropsWithChildren } from "react";

// Define the type for the context

type TaskType = {
  title: string;
  description: string;
  date: string;
  id: string;
};

export type TaskContextType = {
  taskList: TaskType[];
  updateTask: (task: TaskType[]) => void;
};

// Create the context
export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);

// Create the ThemeProvider component
const TaskProvider = ({ children }: PropsWithChildren) => {
  const [task, setTask] = useState<TaskType[]>([
    {
      title: "test1",
      description: "desctest",
      date: "2020",
      id: crypto.randomUUID(),
    },
  ]);

  const updateTask = (task: TaskType[]) => {
    console.log(task);
  };

  const contextValue: TaskContextType = {
    taskList: task,
    updateTask,
  };

  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  );
};

export { TaskProvider };
