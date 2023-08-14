
import { useContext } from "react";
import { TaskContext, TaskContextType } from "./TaskContext";

const useTaskContext = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a ThemeProvider");
  }
  return context;
};

export default useTaskContext;
