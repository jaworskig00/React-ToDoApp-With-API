import { useState } from "react";

import Register from "../components/LoginFlow/Register/Register";
import Login from "../components/LoginFlow/Login/Login";

function LoginScreen() {
  const [currentTab, setCurrentTab] = useState("register");

  const handleSwitch = () => {
    currentTab === "register" ? setCurrentTab("login") : setCurrentTab("register");
  };

  return (
    <div>
      {currentTab === "register" ? (
        <Register handleSwitch={handleSwitch} />
      ) : (
        <Login handleSwitch={handleSwitch} />
      )}
    </div>
  );
}

export default LoginScreen;
