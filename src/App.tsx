import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./components/Context/TaskContext";
import { FC } from "react";

const App:FC = () => {
  return (
    <>
    <TaskProvider>

      <Navbar />
      <section className="container mx-auto p-4  rounded-lg my-4">
      <TaskList />
      </section>
    </TaskProvider>
    </>
  );
}

export default App;
