import { useNavigate } from "react-router-dom";

import { Button } from "../../../../Button/Button";

export const ViewSingleToDo = ({ toDoId, toDo, handleEdit, handleDelete }) => {
  const navigate = useNavigate();

  return (
    <>
      <span className="underline text-lg font-bold">ToDo ID: {toDoId}</span>
      <span className="bg-orange-200 rounded-full m-1 pl-2 py-0.5 min-w-full text-center">
        {toDo.description}
      </span>
      <div>
        <Button text="Edit" style="submit" click={handleEdit} />
        <Button text="Delete" style="cancel" click={handleDelete} />
        <Button
          text="Go back"
          style="secondary"
          click={() => {
            navigate("/todos");
          }}
        />
      </div>
    </>
  );
};
