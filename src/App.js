import { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { api } from './utils/api';

import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const { data } = await api.get("/task");
      if (data.data) {
        setTodos(data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTodos();
    console.error('it didnt work')
  }, []);

  const initialValues = {
    description: ""
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    api.post("/task", {"description": values.description});
    fetchTodos();
    resetForm({});
    console.log(values.description);
  };

  return (
    <div class="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-lg items-center space-y-4">
      <header class="text-xl font-bold">TODO LIST</header>
      <main>
        <ul>
          {todos.length ? (
            todos.map((todo) => {
              return <li class="bg-orange-200 rounded-full text-left m-1 pl-2 py-0.5 min-w-max" key={todo.id}>{todo.description}</li>; //Id: {todo._id}
            })
          ) : (
            <li class="bg-orange-200 rounded-full text-left m-1 pl-2">No todos yet</li>
          )}
        </ul>
      </main>
      <aside class="border rounded-lg p-3">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <label class="underline" htmlFor="description">Add new task</label>
            <br/>
            <Field class=" py-1 px-3 m-2 placeholder:italic bg-white border rounded-full" name="description" type="text" placeholder="Description" />
            <button class="px-3 py-1 m-2 text-sm text-purple-600 font-semibold border rounded-full border-purple-200 hover:text-white hover:bg-purple-600" type="submit">Add</button>
          </Form>
        </Formik>
      </aside>
    </div>
  );
}

export default App;
