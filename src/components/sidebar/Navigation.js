import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const activeStyle = {
    color: '#4bd0a0'
  };

  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink to="/training" activeStyle={activeStyle} className="navigation__link training">
            Training plan
          </NavLink>
        </li>
        <li>
          <NavLink to="/zones" activeStyle={activeStyle} className="navigation__link zones">
            Heart Rate Zones
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeStyle={activeStyle} className="navigation__link profile">
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
