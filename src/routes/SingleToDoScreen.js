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
  }, [todo]);

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
            toDoId={id}
            description={todo.description}
            handleEditCancel={() => {
              setTab(null);
            }}
          />
        ) : null}
        {tab === "delete" ? (
          <DeleteSingleToDo
            toDoId={id}
            handleDeleteCancel={() => {
              setTab(null);
            }}
          />
        ) : null}
      </main>
    </Wrapper>
  );
};
