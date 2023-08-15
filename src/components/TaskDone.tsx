import useTaskContext from "./Context/useTaskContext";
import ReturnIcon from "./Icons/ReturnIcon";
import TrashIcon from "./Icons/TrashIcon";

const TaskDone = () => {
  const { taskList: task, deleteTask, toggleTaskCompletion } = useTaskContext();
  const filteredTask = task.filter((e) => e.completed);

  const noTaskText =
    task.length < 1 ? null : <p>You have {task.length} Task to do.</p>;

  return (
    <>
      {task.length >= 1 ? (
        <h2 className="font-bold mb-4 mt-4">Completed Task :</h2>
      ) : null}
      <div className="flex justify-evenly items-center flex-wrap w-full">
        {filteredTask.map((e) => (
          <div
            key={e.id}
            className="flex flex-col mt-4 bg-slate-300 dark:bg-slate-700 p-4 rounded-lg shadow-lg border border-emerald-600 dark:border-emerald-500 hover:border-emerald-400 dark:hover:border-emerald-400 transition-colors"
          >
            <h4 className="font-bold">{e.title}</h4>
            <p className="text-sm mb-3">{e.description}</p>
            <p>{e.date}</p>
            <div className="flex justify-between mt-2">
              <button
                onClick={() => {
                  toggleTaskCompletion(e.id);
                }}
                className="font-bold shadow-lg px-4 py-2 bg-yellow-400 dark:bg-yellow-600 hover:bg-yellow-300 dark:hover:bg-yellow-500 
                transition-colors rounded-lg "
              >
                <ReturnIcon />
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

export default TaskDone;
