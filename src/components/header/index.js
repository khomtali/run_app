import React from 'react';
import UserIcon from './UserIcon';
import Signup from '../auth';
import './styles.css';

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__inner__logo"><a href="/home">ReDI-RUN-App</a></div>
        <div className="header__inner__account">
          <UserIcon />
          <Signup />
        </div>
      </div>
    </header>
  );
}

export default Header;
