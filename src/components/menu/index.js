import React from 'react';
import { useUserContext } from '../../contexts/UserContext';
import Title from './Title';
import Pages from './Pages';
import Signup from '../auth/Signup';

function Menu() {
  const { user } = useUserContext();

  return (
    <div className="menu">
      <Title />
      {user &&
        <Pages />
      }
      <Signup />
    </div>
  );
}

export default Menu;
