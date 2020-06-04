import React, { useState, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { authFlow } from '.';

function UserProvider(props) {
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
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;
