import { useEffect, useState } from "react";

import { privateApi } from "../../utils/api";
import { TodosList } from "./TodosList/TodosList";
import { AddToDoFrom } from "./AddToDoForm/AddToDoForm";

function Todos() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const { data } = await privateApi(localStorage.getItem("token")).get("/task");
      if (data.data) {
        setTodos(data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const initialValues = {
    description: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    await privateApi(localStorage.getItem("token")).post("/task", { description: values.description });
    fetchTodos();
    resetForm({});
  };

  return (
    <>
      <TodosList todos={todos} />
      <AddToDoFrom initialValues={initialValues} handleSubmit={handleSubmit} />
    </>
  );
}

export default Todos;
