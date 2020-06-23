import React from 'react';
import { NavLink } from 'react-router-dom';

import UserIcon from './UserIcon';
import Signup from '../Signup';
import './styles.css';

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__inner__logo">
          <NavLink to="/" className="header__inner__logo__link">ReDI-RUN-App</NavLink>
        </div>
        <div className="header__inner__account">
          <UserIcon />
          <Signup />
        </div>
      </div>
    </header>
  );
}

export default Header;
