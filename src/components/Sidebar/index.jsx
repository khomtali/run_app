import React from 'react';

import { useUserContext } from '../../contexts/UserContext';
import Signup from '../Signup';
import Navigation from './Navigation';
import './styles.css';

const Sidebar = () => {
  const { user } = useUserContext();

  return (
    <div className="sidebar">
      {user ?
        <Navigation />
        :
        <>
          <p>To configure personal training plan please sign up or log in.</p>
          <Signup />
        </>
      }
    </div>
  );
};

export default Sidebar;
