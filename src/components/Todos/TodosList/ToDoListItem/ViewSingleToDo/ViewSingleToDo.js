import { useNavigate } from "react-router-dom";

export const ViewSingleToDo = ({ toDoId, toDo, handleEdit, handleDelete }) => {
  const navigate = useNavigate();

  return (
    <>
      <span className="underline text-lg font-bold">ToDo ID: {toDoId}</span>
      <span className="bg-orange-200 rounded-full m-1 pl-2 py-0.5 min-w-full text-center">
        {toDo.description}
      </span>
      <div>
        <button
          className="px-3 py-1 m-2 text-sm text-purple-600 font-semibold border rounded-full border-purple-200 hover:text-white hover:bg-purple-600"
          onClick={() => {
            handleEdit();
          }}
        >
          Edit
        </button>
        <button
          className="px-3 py-1 m-2 text-sm text-red-500 font-semibold border rounded-full border-red-200 hover:text-white hover:bg-red-500"
          onClick={() => {
            handleDelete();
          }}
        >
          Delete
        </button>
        <button
          className="px-3 py-1 m-2 text-sm text-blue-600 font-semibold border rounded-full border-blue-200 hover:text-white hover:bg-blue-600"
          onClick={() => {
            navigate("/todos");
          }}
        >
          Go back
        </button>
      </div>
    </>
  );
};
