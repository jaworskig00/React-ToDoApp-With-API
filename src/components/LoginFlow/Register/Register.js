import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { AuthContext } from "../../../utils/AuthProvider";

function Register({ handleSwitch }) {
  const auth = useContext(AuthContext);

  const initialValues = {
    name: "",
    email: "",
    password: "",
    age: "",
  };

  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name too short - must have at least 3 characteres")
      .max(30, "Name too long - must have less than 31 characteres")
      .required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password too short - must have at least 6 characteres")
      .required("Password is required"),
    age: Yup.number()
      .positive("Age must be a positive number")
      .integer("Age must be an integer")
      .required("Age is required"),
  });

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-lg items-center space-y-4">
      <aside className="border rounded-lg p-3">
        <Formik
          initialValues={initialValues}
          validationSchema={RegisterSchema}
          onSubmit={auth.handleRegisterSubmit}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form className="min-w-max mx-auto flex items-center flex-col">
              <label
                className="text-2xl underline mx-auto"
                htmlFor="description"
              >
                Please register
              </label>
              <br />
              <Field
                className=" py-1 px-3 mx-2 mt-2 placeholder:italic bg-white border rounded-full w-11/12"
                name="name"
                type="text"
                placeholder="Name"
              />
              {errors.name && touched.name ? (
                <div className="py-1 px-3 mx-2 mb-2 w-11/12 text-red-600">
                  {errors.name}
                </div>
              ) : null}
              <Field
                className=" py-1 px-3 mx-2 mt-2 placeholder:italic bg-white border rounded-full w-11/12"
                name="email"
                type="email"
                placeholder="email@example.com"
              />
              {errors.email && touched.email ? (
                <div className="py-1 px-3 mx-2 mb-2 w-11/12 text-red-600">
                  {errors.email}
                </div>
              ) : null}
              <Field
                className=" py-1 px-3 mx-2 mt-2 placeholder:italic bg-white border rounded-full w-11/12"
                name="password"
                type="password"
                placeholder="Password"
              />
              {errors.password && touched.password ? (
                <div className="py-1 px-3 mx-2 mb-2 w-11/12 text-red-600">
                  {errors.password}
                </div>
              ) : null}
              <Field
                className=" py-1 px-3 mx-2 mt-2 placeholder:italic bg-white border rounded-full w-11/12"
                name="age"
                type="number"
                placeholder="Age"
              />
              {errors.age && touched.age ? (
                <div className="py-1 px-3 mx-2 mb-2 w-11/12 text-red-600">
                  {errors.age}
                </div>
              ) : null}
              <br />
              <button
                className="px-3 py-1 m-2 text-sm text-purple-600 font-semibold border rounded-full border-purple-200 hover:text-white hover:bg-purple-600"
                type="submit"
                disabled={!(dirty && isValid)}
              >
                Register
              </button>
              <button
                className="underline"
                name="switchButton"
                type="button"
                onClick={() => {
                  handleSwitch();
                }}
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
      </aside>
    </div>
  );
}

export default Register;
