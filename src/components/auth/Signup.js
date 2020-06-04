import React from 'react';
import { useUserContext } from '../../contexts/UserContext';
import { login, logout } from '.';

function Signup() {
  const { user } = useUserContext();

  const handleSignupClick = async () => {
    login();
  };
  const handleLogoutClick = async () => {
    logout();
  };

  return (
    <div>
      {!user ?
        <button type="button" onClick={handleSignupClick}>Signup or Login</button>
        :
        <button type="button" onClick={handleLogoutClick}>Logout</button>
      }
    </div>
  );
}

export default Signup;
