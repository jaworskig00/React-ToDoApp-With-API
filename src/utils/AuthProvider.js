import React, { useContext, createContext, useState } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";

import { publicApi, privateApi } from "./api";

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
    
    navigate(from, {replace: true});
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
      <div>
        <h1>Please register/login first</h1>
        <br />
        <button
          type="button"
          onClick={() => navigate("/", { state: { from: location }, replace: undefined })}
        >
          Register/Login
        </button>
      </div>
    );
  }

  return children;
}
