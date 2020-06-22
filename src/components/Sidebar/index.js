import React from 'react';

import { useUserContext } from '../../contexts/UserContext';
import Signup from '../Signup';
import Navigation from './Navigation';
import './styles.css';

function Sidebar() {
  const { user } = useUserContext();

  return (
    <div className="sidebar">
      {!user ?
        <>
          <p>To configure personal training plan please sign up or log in.</p>
          <Signup />
        </>
        :
        <Navigation />
      }
    </div>
  );
}

export default Sidebar;
