import React from 'react';

import { useUserContext } from '../../contexts/UserContext';
import { login, logout } from '../../configurations/auth';

function Signup() {
  const { user } = useUserContext();

  const handleSignupClick = async () => {
    login();
  };
  const handleLogoutClick = async () => {
    logout();
  };

  return (
    <>
      {!user ?
        <div className="login" onClick={handleSignupClick}>Signup or Login</div>
        :
        <div className="logout" onClick={handleLogoutClick}>Logout</div>
      }
    </>
  );
}

export default Signup;
