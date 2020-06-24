import React, { useState, useEffect } from 'react';
import { trackPromise } from 'react-promise-tracker';

import { UserContext } from '../../contexts/UserContext';
import { authFlow } from '../../configurations/auth';

const UserProvider = ({ children }) => {
  // ref: https://stackoverflow.com/questions/58197800/set-the-data-in-react-context-from-asynchronous-api-call
  const [user, setUser] = useState();

  useEffect(() => {
    trackPromise(
      authFlow((user) => {
        setUser(user);
        console.log('user', user);
      })
    );
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
