import { useContext } from "react";
import { AuthContext } from "../../utils/AuthProvider";

export const LogOut = () => {
  const auth = useContext(AuthContext);
  return <button type="button" className="px-3 py-1 mr-4 text-sm text-purple-600 font-semibold border rounded-full border-purple-200 hover:text-white hover:bg-purple-600 w-3/12 max-w-min absolute top-0 right-0" onClick={auth.signOut}>LogOut</button>;
};
  