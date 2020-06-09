import { useContext, createContext } from "react";

export const UserContext = createContext({
  user: null
});
export const useUserContext = () => useContext(UserContext);
