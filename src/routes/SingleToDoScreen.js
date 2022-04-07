import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { api } from "../utils/api";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { ViewSingleToDo } from "../components/Todos/TodosList/ToDoListItem/ViewSingleToDo/ViewSingleToDo";
import { EditSingleToDo } from "../components/Todos/TodosList/ToDoListItem/EditSingleToDo/EditSingleToDo";
import { DeleteSingleToDo } from "../components/Todos/TodosList/ToDoListItem/DeleteSingleToDo/DeleteSingleToDo";

export const SingleToDoScreen = () => {
  const [todo, setTodo] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchTodo = async () => {
      try {
<<<<<<< HEAD
        const { data } = await api.get("/task/" + id);
=======
        const { data } = await privateApi(localStorage.getItem("token")).get(
          "/task/" + id
        );
>>>>>>> 2b2278a (Added todos editing and deleting functionality (without API yet))
        if (data.data) {
          setTodo(data.data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchTodo();
  }, []);

  const handleEdit = () => {
    console.log("Task updated");
    setIsEditing(false);
  }; // obsługa edycji z api

  const handleDelete = () => {
    console.log("Task deleted");
    setIsDeleting(false);
  }; // obsługa usuwania z api

  return (
    <Wrapper>
      <main className="flex flex-col items-center">
        <ViewSingleToDo
          toDoId={id}
          toDo={todo}
          handleEdit={() => {
            setIsEditing(true);
            setIsDeleting(false);
          }}
          handleDelete={() => {
            setIsEditing(false);
            setIsDeleting(true);
          }}
        />
        {isEditing ? (
          <EditSingleToDo
            handleEdit={handleEdit}
            handleEditCancel={() => {
              setIsEditing(false);
            }}
          />
        ) : null}
        {isDeleting ? (
          <DeleteSingleToDo
            handleDelete={handleDelete}
            handleDeleteCancel={() => {
              setIsDeleting(false);
            }}
          />
        ) : null}
      </main>
    </Wrapper>
  );
};
