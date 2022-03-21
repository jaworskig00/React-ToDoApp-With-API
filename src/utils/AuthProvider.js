import React, { useContext, createContext, useState } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";

import { publicApi, privateApi } from "./api";
import { Wrapper } from "../components/Wrapper/Wrapper";

export const AuthContext = createContext({
  isAuthenticated: false,
  handleRegisterSubmit: () => {},
  signIn: () => {},
  signOut: () => {},
});

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/todos";

  const handleRegisterSubmit = async (values) => {
    try {
      const { data } = await publicApi.post("/user/register", {
        name: values.name,
        email: values.email,
        password: values.password,
        age: values.age,
      });
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const signIn = async (values) => {
    try {
      const { data } = await publicApi.post("/user/login", {
        email: values.email,
        password: values.password,
      });
      if (data.token) {
        localStorage.setItem("token", data.token);
        setIsAuthenticated(true);
      }
    } catch (err) {
      console.error(err);
    }

    navigate(from, { replace: true });
  };

  const signOut = async () => {
    try {
      await privateApi.post("/user/logout");
      setIsAuthenticated(false);
    } catch (err) {
      console.error(err);
    }

    navigate("/");
  };

  const value = { isAuthenticated, handleRegisterSubmit, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function RequireAuth({ children }) {
  const auth = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  if (!auth.isAuthenticated) {
    return (
      <Wrapper>
        <main className="flex flex-col items-center border rounded-lg p-3">
          <span className="underline text-lg font-bold">
            Please register or login first
          </span>
          <button
            type="button"
            className="px-3 py-1 m-2 text-sm text-purple-600 font-semibold border rounded-full border-purple-200 hover:text-white hover:bg-purple-600"
            onClick={() =>
              navigate("/", { state: { from: location }, replace: undefined })
            }
          >
            Register/Login
          </button>
        </main>
      </Wrapper>
    );
  }

  return children;
}
