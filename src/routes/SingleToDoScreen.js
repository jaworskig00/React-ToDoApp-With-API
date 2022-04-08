import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { api } from "../utils/api";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { ViewSingleToDo } from "../components/Todos/TodosList/ToDoListItem/ViewSingleToDo/ViewSingleToDo";
import { EditSingleToDo } from "../components/Todos/TodosList/ToDoListItem/EditSingleToDo/EditSingleToDo";
import { DeleteSingleToDo } from "../components/Todos/TodosList/ToDoListItem/DeleteSingleToDo/DeleteSingleToDo";

export const SingleToDoScreen = () => {
  const [todo, setTodo] = useState([]);
  const [tab, setTab] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const { data } = await api.get("/task/" + id);
        if (data.data) {
          setTodo(data.data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchTodo();
<<<<<<< HEAD
<<<<<<< HEAD
  }, [todo]);
=======
  }, []);
>>>>>>> 49f364d (Moved handle funcions to edit and delete components)
=======
  }, [todo]);
>>>>>>> c0580f4 (Added editing and deleting todos with API)

  return (
    <Wrapper>
      <main className="flex flex-col items-center">
        <ViewSingleToDo
          toDoId={id}
          toDo={todo}
          handleEdit={() => {
            setTab("edit");
          }}
          handleDelete={() => {
            setTab("delete");
          }}
        />
        {tab === "edit" ? (
          <EditSingleToDo
<<<<<<< HEAD
<<<<<<< HEAD
            toDoId={id}
            description={todo.description}
=======
>>>>>>> 49f364d (Moved handle funcions to edit and delete components)
=======
            toDoId={id}
            description={todo.description}
>>>>>>> c0580f4 (Added editing and deleting todos with API)
            handleEditCancel={() => {
              setTab(null);
            }}
          />
        ) : null}
        {tab === "delete" ? (
          <DeleteSingleToDo
<<<<<<< HEAD
<<<<<<< HEAD
            toDoId={id}
=======
>>>>>>> 49f364d (Moved handle funcions to edit and delete components)
=======
            toDoId={id}
>>>>>>> c0580f4 (Added editing and deleting todos with API)
            handleDeleteCancel={() => {
              setTab(null);
            }}
          />
        ) : null}
      </main>
    </Wrapper>
  );
};
