<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from "../../../../Button/Button";

=======
>>>>>>> 49f364d (Moved handle funcions to edit and delete components)
export const DeleteSingleToDo = ({ handleDeleteCancel }) => {
  const handleDelete = () => {
    handleDeleteCancel();
=======
import { useNavigate } from "react-router-dom";
import { api } from "../../../../../utils/api";

export const DeleteSingleToDo = ({ toDoId, handleDeleteCancel }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await api.delete(`/task/${toDoId}`);
    } catch (err) {
      console.error(err);
      // return; -> przerwanie wykonywania funkcji 
    }
    navigate('/todos');
>>>>>>> c0580f4 (Added editing and deleting todos with API)
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
