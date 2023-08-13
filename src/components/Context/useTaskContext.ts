// useTheme.ts
import { useContext } from "react";
import { TaskContext, TaskContextType } from "./TaskContext";

const useTheme = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default useTheme;
