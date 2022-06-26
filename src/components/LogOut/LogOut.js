import { useAuth } from "../../utils/AuthProvider";

import { Button } from "../Button/Button";

export const LogOut = () => {
  const { signOut } = useAuth();
  return <Button text="LogOut" style="logout" click={signOut} />;
};
