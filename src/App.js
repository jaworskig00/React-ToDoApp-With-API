import { RoutesScreen } from "./routes/RoutesScreen";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <RoutesScreen />
    </BrowserRouter>
  );
}

export default App;
