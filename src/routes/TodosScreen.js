import { Outlet } from "react-router-dom";

import { Wrapper } from "../components/Wrapper/Wrapper";
import { Header } from "../components/Header/Header";
import { LogOut } from "../components/LogOut/LogOut";
import Todos from "../components/Todos/Todos";

export const TodosScreen = () => {
  return (
    <Wrapper>
      <Header />
      <LogOut />
      <Todos />
    </Wrapper>
  );
};
