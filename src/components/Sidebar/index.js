import React from 'react';

import { useUserContext } from '../../contexts/UserContext';
import Navigation from './Navigation';
import './styles.css';

function Sidebar() {
  const { user } = useUserContext();

  return (
    <div className="sidebar">
      {user &&
        <Navigation />
      }
    </div>
  );
}

export default Sidebar;
