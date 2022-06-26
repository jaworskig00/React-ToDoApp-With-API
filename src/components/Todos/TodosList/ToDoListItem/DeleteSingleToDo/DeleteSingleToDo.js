import { useNavigate } from "react-router-dom";

import { api } from "../../../../../utils/api";
import { Button } from "../../../../Button/Button";

export const DeleteSingleToDo = ({ toDoId, handleDeleteCancel }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    handleDeleteCancel();
    await api.delete("/task/" + toDoId);
    navigate("/todos");
    console.log("Task deleted");
  }; // obsługa usuwania z api

  return (
    <aside className="min-w-full flex flex-col items-center">
      <div className="px-3 py-2 underline text-lg text-white bg-red-500 font-bold border rounded-lg border-red-500">
        Are you sure you want to delete this ToDo?
      </div>
      <div>
        <Button text="Confirm" style="submit" click={handleDelete} />
        <Button text="Cancel" style="cancel" click={handleDeleteCancel} />
      </div>
    </aside>
  );
};
