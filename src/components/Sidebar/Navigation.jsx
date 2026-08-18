import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const activeStyle = {
    color: '#4bd0a0'
  };

  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink to="/home" activeStyle={activeStyle} className="navigation__link home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/training" activeStyle={activeStyle} className="navigation__link training">
            Training Plan
          </NavLink>
        </li>
        <li>
          <NavLink to="/zones" activeStyle={activeStyle} className="navigation__link zones">
            Heart Rate Zones
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeStyle={activeStyle} className="navigation__link profile">
            User Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
