export const DeleteSingleToDo = ({ handleDeleteCancel }) => {
  const handleDelete = () => {
    handleDeleteCancel();
    console.log("Task deleted");
  }; // obsługa usuwania z api

  return (
    <aside className="min-w-full flex flex-col items-center">
      <div className="px-3 py-2 underline text-lg text-white bg-red-500 font-bold border rounded-lg border-red-500">
        Are you sure you want to delete this ToDo?
      </div>
      <div>
        <button
          className="px-3 py-1 m-2 text-sm text-purple-600 font-semibold border rounded-full border-purple-200 hover:text-white hover:bg-purple-600"
          onClick={() => {
            handleDelete();
          }}
        >
          Confirm
        </button>
        <button
          className="px-3 py-1 m-2 text-sm text-red-500 font-semibold border rounded-full border-red-200 hover:text-white hover:bg-red-500"
          onClick={() => {
            handleDeleteCancel();
          }}
        >
          Cancel
        </button>
      </div>
    </aside>
  );
};
