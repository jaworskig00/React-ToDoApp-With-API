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
    <div>
      <header>TODO LIST</header>
      <main>
        <ul>
          {todos.length ? (
            todos.map((todo) => {
              return <li key={todo.id}>{todo.description}</li>; //Id: {todo._id}
            })
          ) : (
            <li>No todos yet</li>
          )}
        </ul>
      </main>
      <aside style={{ paddingLeft: "10px" }}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <label htmlFor="description">Add description of task</label>
            <br/>
            <Field name="description" type="text" placeholder="description" />
            <button type="submit">Add</button>
          </Form>
        </Formik>
      </aside>
    </div>
  );
}

export default App;
