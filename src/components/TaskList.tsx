import useTheme from "./Context/useTaskContext";

const TaskList = () => {
  const { taskList: task } = useTheme();
  return (
    <>
      <h2
        className="font-bold mb-4"
      >
        Task to do :
      </h2>
      <div className="flex justify-evenly items-center flex-wrap">
        {task.map((e) => (
          <div
            key={e.id}
            className="flex flex-col mt-4 bg-gray-300 dark:bg-slate-700 p-4 rounded-lg shadow-lg border border-slate-900 dark:border-slate-500 hover:border-slate-400 dark:hover:border-slate-400 transition-colors"
          >
            <h4 className="font-bold">{e.title}</h4>
            <p className="text-sm mb-3">{e.description}</p>
            <p>{e.date}</p>
            <div className="flex justify-between space-x-4 mt-2">
              <button
                className="font-bold shadow-lg px-4 py-2 bg-emerald-400 dark:bg-emerald-500 hover:bg-emerald-300 dark:hover:bg-emerald-400 
                transition-colors rounded-lg "
              >
                Done
              </button>
              <button
                className="font-bold shadow-lg px-4 py-2 bg-red-500 dark:bg-red-600 hover:bg-red-400 dark:hover:bg-red-500 
                transition-colors rounded-lg "
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskList;
