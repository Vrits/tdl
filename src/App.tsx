import Navbar from "./components/Navbar";
import { TaskProvider } from "./components/Context/TaskContext";
import { FC } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";

const App: FC = () => {
  return (
    <>
      <TaskProvider>
        <Navbar />
        <section className=" flex flex-col justify-center items-center container mx-auto p-4 rounded-lg my-4 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Home />
          <About /> */}
          </Routes>
        </section>
      </TaskProvider>
    </>
  );
};

export default App;
