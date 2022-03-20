import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { api } from "../utils/api";
import { Wrapper } from "../components/Wrapper/Wrapper";

export const SingleToDoScreen = () => {
  const [todo, setTodo] = useState([]);

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
  }, []);

  return (
    <Wrapper>
      <main className="flex flex-col items-center">
        <span className="underline text-lg font-bold">
          ToDo ID: {id}
        </span>
        <span className="bg-orange-200 rounded-full m-1 pl-2 py-0.5 min-w-full text-center">
          {todo.description}
        </span>
      </main>
    </Wrapper>
  );
};
