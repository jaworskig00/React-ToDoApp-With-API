import { useState } from "react";

import Register from "../components/LoginFlow/Register/Register";
import Login from "../components/LoginFlow/Login/Login";

function LoginScreen() {
  const [isRegistred, setIsRegistred] = useState(false);

  const handleSwitch = () => {
    setIsRegistred(!isRegistred);
  };

  return (
    <div>
      {!isRegistred ? (
        <Register handleSwitch={handleSwitch} />
      ) : (
        <Login handleSwitch={handleSwitch} />
      )}
    </div>
  );
}

export default LoginScreen;
