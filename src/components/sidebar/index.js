import React from 'react';
import { useUserContext } from '../../contexts/UserContext';
import Title from './Title';
import Navigation from './Navigation';
import './styles.css';

function Menu() {
  const { user } = useUserContext();

  return (
    <div className="sidebar">
      <Title />
      {user &&
        <Navigation />
      }
    </div>
  );
}

export default Menu;
