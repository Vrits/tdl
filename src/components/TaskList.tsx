import useTaskContext from "./Context/useTaskContext";
import CheckIcon from "./Icons/CheckIcon";
import TrashIcon from "./Icons/TrashIcon";

const TaskList = () => {
  const { taskList: task, deleteTask, toggleTaskCompletion } = useTaskContext();
  const filteredTask = task.filter((e) => !e.completed);

  const noTaskText =
    task.length < 1 ? (
      <p>There no task to do right now, Add some task?</p>
    ) : (
      <p>You have done all the tasks, Have a good rest!</p>
    );
  return (
    <>
      <h2 className="font-bold mb-4">Task to do :</h2>
      <div className="flex justify-evenly items-center flex-wrap w-full">
        {filteredTask.map((e) => (
          <div
            key={e.id}
            className="flex flex-col mt-4 bg-slate-300 dark:bg-slate-700  p-4 rounded-lg shadow-lg border border-transparent dark:border-slate-500 hover:border-slate-400 dark:hover:border-slate-400 transition-colors w-full sm:w-fit"
          >
            <h4 className="font-bold">{e.title}</h4>
            <p className="text-sm mb-3">{e.description}</p>
            <p>{e.date}</p>
            <div className="flex justify-between mt-2">
              <button
                onClick={() => {
                  toggleTaskCompletion(e.id);
                }}
                className="font-bold shadow-lg px-4 py-2 bg-emerald-400 dark:bg-emerald-500 hover:bg-emerald-300 dark:hover:bg-emerald-400 
                transition-colors rounded-lg "
              >
                <CheckIcon />
              </button>
              <button
                onClick={() => {
                  deleteTask(e.id);
                }}
                className="font-bold shadow-lg px-4 py-2 bg-red-500 dark:bg-red-600 hover:bg-red-400 dark:hover:bg-red-500 
                transition-colors rounded-lg ml-12"
              >
                <TrashIcon />
              </button>
            </div>
          </div>
        ))}
        {filteredTask.length < 1 ? noTaskText : null}
      </div>
    </>
  );
};

export default TaskList;
