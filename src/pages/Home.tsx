import TaskDone from "../components/TaskDone";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Home = () => {
  return (
    <>
      <TaskList />
      <TaskForm />
      <TaskDone />
    </>
  );
};

export default Home;
