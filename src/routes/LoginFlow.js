import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

function LoginFlow() {
  const [isRegistred, setIsRegistred] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    password: "",
    age: undefined,
  };

  const SwitchClick = () => {
    isRegistred ? setIsRegistred(false) : setIsRegistred(true);
  }

  return (
    <div>
      {!isRegistred ? <Register initialValues={initialValues} SwitchClick={SwitchClick} /> : <Login initialValues={initialValues}  SwitchClick={SwitchClick}/>}
    </div>
  );
}

function Register({ initialValues, SwitchClick }) {
  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-lg items-center space-y-4">
      <aside className="border rounded-lg p-3">
        <Formik initialValues={initialValues} /*onSubmit={handleSubmit}*/>
          <Form className="min-w-max mx-auto flex items-center flex-col">
            <label className="text-2xl underline mx-auto" htmlFor="description">
              Please register
            </label>
            <br />
            <Field
              className=" py-1 px-3 m-2 placeholder:italic bg-white border rounded-full w-11/12"
              name="name"
              type="text"
              placeholder="Name"
            />
            <Field
              className=" py-1 px-3 m-2 placeholder:italic bg-white border rounded-full w-11/12"
              name="email"
              type="email"
              placeholder="dupa@dupa.com"
            />
            <Field
              className=" py-1 px-3 m-2 placeholder:italic bg-white border rounded-full w-11/12"
              name="password"
              type="password"
              placeholder="Password"
            />
            <Field
              className=" py-1 px-3 m-2 placeholder:italic bg-white border rounded-full w-11/12"
              name="age"
              type="number"
              placeholder="Age"
            />
            <br />
            <button
              className="px-3 py-1 m-2 text-sm text-purple-600 font-semibold border rounded-full border-purple-200 hover:text-white hover:bg-purple-600"
              type="submit"
            >
              Register
            </button>
            <button className="underline" name="switchButton" type="text" onClick={() => {SwitchClick()}}>Login</button>
          </Form>
        </Formik>
      </aside>
    </div>
  );
}

function Login({ initialValues, SwitchClick }) {
  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-lg items-center space-y-4">
      <aside className="border rounded-lg p-3">
        <Formik initialValues={initialValues} /*onSubmit={handleSubmit}*/>
          <Form className="min-w-max mx-auto flex items-center flex-col">
            <label className="text-2xl underline mx-auto" htmlFor="description">
              Please login
            </label>
            <br />
            <Field
              className=" py-1 px-3 m-2 placeholder:italic bg-white border rounded-full w-11/12"
              name="email"
              type="email"
              placeholder="email@example.com"
            />
            <Field
              className=" py-1 px-3 m-2 placeholder:italic bg-white border rounded-full w-11/12"
              name="password"
              type="password"
              placeholder="Password"
            />
            <br />
            <button
              className="px-3 py-1 m-2 text-sm text-purple-600 font-semibold border rounded-full border-purple-200 hover:text-white hover:bg-purple-600"
              type="submit"
            >
              Login
            </button>
            <button className="underline" name="switchButton" type="text" onClick={() => {SwitchClick()}}>Register</button>
          </Form>
        </Formik>
      </aside>
    </div>
  );
}

export default LoginFlow;
