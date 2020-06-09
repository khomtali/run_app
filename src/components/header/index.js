import React from 'react';
import UserIcon from './UserIcon';
import Signup from '../auth/Signup';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">ReDI-RUN-App</div>
      <div className="header__menu">
        <UserIcon />
        <Signup />
      </div>
    </header>
  );
}

export default Header;
