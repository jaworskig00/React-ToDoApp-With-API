import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import LoginFlow from "./routes/LoginFlow";
import { BlankPage } from "./routes/BlankPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginFlow />} />
        <Route path="/todos" element={<App />} />
        <Route path="*" element={<BlankPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
