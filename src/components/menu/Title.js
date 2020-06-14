import React from 'react';
import { useUserContext } from '../../contexts/UserContext';

function Title() {
  const { user } = useUserContext();

  return (
    <>
      {!user ?
        <h3>Welcome to redi-run!</h3>
        :
        <h3>Welcome to redi-run, {user.authData.nickname}!</h3>
      }
    </>
  );
}

export default Title;
