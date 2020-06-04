import React, { useEffect, useState } from 'react';
import { login, logout, authFlow } from '../auth';

function Signup() {
  const [user, setUser] = useState();
  useEffect(() => {
    authFlow((user) => {
      setUser(user);
      console.log('user', user);
    });
  }, []);

  const handleSignupClick = async () => {
    login();
  }

  const handleLogoutClick = async () => {
    logout();
  }
  return (
    <div>
      {!user ?
        <button type="button" onClick={handleSignupClick}>Signup/Login</button>
        :
        <button type="button" onClick={handleLogoutClick}>Logout</button>
      }
      <p>Username: {user ? user.authData.nickname : '?'}</p>
      <p>Token: {user && user.token ? 'recived token' : '?'}</p>
    </div>
  );
}

export default Signup;