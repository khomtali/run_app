import React from 'react';

import { useUserContext } from '../../contexts/UserContext';
import { login, logout } from '../../configurations/auth';
import './styles.css';

const Signup = () => {
  const { user } = useUserContext();

  const handleSignupClick = async () => {
    login();
  };
  
  const handleLogoutClick = async () => {
    logout();
  };

  return (
    <>
      {user ?
        <div className="auth-button logout" onClick={handleLogoutClick}>Logout</div>
        :
        <div className="auth-button login" onClick={handleSignupClick}>Signup or Login</div>
      }
    </>
  );
};

export default Signup;
