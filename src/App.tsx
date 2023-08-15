import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import TaskDone from "./components/TaskDone";
import { TaskProvider } from "./components/Context/TaskContext";
import { FC } from "react";
import TaskForm from "./components/TaskForm";

const App: FC = () => {
  return (
    <>
      <TaskProvider>
        <Navbar />
        <section className=" flex flex-col justify-center items-center container mx-auto p-4 rounded-lg my-4 ">
          <TaskForm />
          <TaskList />
          <TaskDone />
        </section>
      </TaskProvider>
    </>
  );
};

export default App;
