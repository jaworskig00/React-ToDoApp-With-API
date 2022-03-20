import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginScreen from "./LoginScreen";
import { BlankScreen } from "./BlankScreen";
import { TodosScreen } from "./TodosScreen";
import { SingleToDoScreen } from "./SingleToDoScreen";

export const RoutesScreen = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/todos" element={<TodosScreen />} />
      <Route path="/todos/:id" element={<SingleToDoScreen />} />
      <Route path="*" element={<BlankScreen />} />
    </Routes>
  );
};
