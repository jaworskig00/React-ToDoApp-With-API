import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, useLocation } from "react-router-dom";

import { useAuth } from "../../../utils/AuthProvider";

import { Button } from "../../Button/Button";

function Login({ handleSwitch }) {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const initialValues = {
    email: "",
    password: "",
  };

  const handleLogin = (values) => {
    signIn(values.email, values.password);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-lg items-center space-y-4">
      <aside className="border rounded-lg p-3">
        <Formik initialValues={initialValues} onSubmit={handleLogin}>
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
            <Button text="Login" style="submit" type="submit" />
            <Button
              text="Register"
              style="primary"
              type="button"
              click={() => {
                handleSwitch();
              }}
            />
          </Form>
        </Formik>
      </aside>
    </div>
  );
}

export default Login;
