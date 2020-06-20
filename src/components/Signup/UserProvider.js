import React, { useState, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { trackPromise } from 'react-promise-tracker';
import { authFlow } from '../../configurations/auth';

function UserProvider(props) {
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
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;
