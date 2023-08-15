import { FC, FormEvent, useRef } from "react";
import { TaskType } from "./Context/TaskContext";
import useTaskContext from "./Context/useTaskContext";

const TaskForm: FC = () => {
  const { addTask } = useTaskContext();

  const titleRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLInputElement | null>(null);
  const dateRef = useRef<HTMLInputElement | null>(null);

  const formHandler = (event: FormEvent) => {
    event.preventDefault();
    const titleValue = titleRef.current?.value;
    const descriptionValue = descriptionRef.current?.value;
    const dateValue = dateRef.current?.value;

    if (!titleValue || !descriptionValue || !dateValue) return;

    const newTask: TaskType = {
      title: titleValue,
      description: descriptionValue,
      date: dateValue,
      completed: false,
      id: crypto.randomUUID(),
    };

    addTask(newTask);
  };
  return (
    <div className="flex flex-col justify-center items-center w-full sm:w-4/5 md:w-3/5 lg:w-[540px] my-8">
      <h2 className=" text-xl font-bold">Add new task</h2>
      <form className="flex flex-col space-y-3 w-full" onSubmit={formHandler}>
        <label className="text-lg" htmlFor="title">
          Task Title
        </label>
        <input
          required
          type="text"
          name="title"
          id="title"
          className="rounded-lg text-slate-900 p-2"
          ref={titleRef}
        />
        <label className="text-lg" htmlFor="desc">
          Task Description
        </label>
        <input
          required
          type="text"
          name="desc"
          id="desc"
          className="rounded-lg text-slate-900 p-2"
          ref={descriptionRef}
        />
        <label className="text-lg" htmlFor="title">
          Task Date
        </label>
        <input
          required
          type="date"
          name="date"
          id="date"
          className="rounded-lg text-slate-900 p-2"
          ref={dateRef}
        />
        <button
          type="submit"
          className=" bg-blue-700 rounded-lg font-bold px-8 py-2 self-end hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
