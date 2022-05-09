import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider, RequireAuth } from "../utils/AuthProvider";
import LoginScreen from "./LoginScreen";
import { BlankScreen } from "./BlankScreen";
import { TodosScreen } from "./TodosScreen";
import { SingleToDoScreen } from "./SingleToDoScreen";

export const RoutesScreen = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route
          path="/todos"
          element={
            <RequireAuth>
              <TodosScreen />
            </RequireAuth>
          }
        />
        <Route path="/todos/:id" element={<SingleToDoScreen />} />
        <Route path="*" element={<BlankScreen />} />
      </Routes>
    </AuthProvider>
  );
};
