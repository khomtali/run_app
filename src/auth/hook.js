import React, { useState, useEffect, useContext } from "react";
import { authFlow } from '.';

const UserContext = React.createContext({});
export const useUserContext = init => useContext(UserContext);

export const UserProvider = ({ children }) => {
  // ref: https://stackoverflow.com/questions/58197800/set-the-data-in-react-context-from-asynchronous-api-call
  const [user, setUser] = useState();
  // const [loading, setLoading] = useState(false);

  // const getAffiliates = async () => {
  //   setLoading(true)
  //   const newText = await callAffiliateApi();
  //   setData(newText)
  //   setLoading(false)
  // }

  useEffect(() => {
    authFlow((user) => {
      setUser(user);
      console.log('user', user);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
}