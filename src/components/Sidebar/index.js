import React from 'react';

import Title from './Title';
import Navigation from './Navigation';
import './styles.css';

function Sidebar() {

  return (
    <div className="sidebar">
      <Title />
      <Navigation />
    </div>
  );
}

export default Sidebar;
