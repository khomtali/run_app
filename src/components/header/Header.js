import React from 'react';
import Signup from '../Signup';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">ReDI-RUN-App</div>
      <div>
        <Signup />
      </div>
    </header>
  );
}

export default Header;
