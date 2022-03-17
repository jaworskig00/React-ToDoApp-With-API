import { Wrapper } from "./components/Wrapper/Wrapper";
import { Header } from "./components/Header/Header";
import Todos from "./components/Todos/Todos";

import "./App.css";

function App() {
  return (
    <Wrapper>
      <Header />
      <Todos />
    </Wrapper>
  );
}

export default App;
