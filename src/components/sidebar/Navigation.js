import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

function Navigation() {
  const activeStyle = {
    color: '#4bd0a0'
  };

  return (
    <Router>
      <div className="navigation">
        <nav>
          <NavLink to="/training" activeStyle={activeStyle} className="navigation__link training">
            Training plan
          </NavLink>
          <NavLink to="/zones" activeStyle={activeStyle} className="navigation__link zones">
            Heart Rate Zones
          </NavLink>
          <NavLink to="/profile" activeStyle={activeStyle} className="navigation__link profile">
            My Profile
          </NavLink>
        </nav>
      </div>
    </Router>
  );
}

export default Navigation;
