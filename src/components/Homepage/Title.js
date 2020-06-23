import React from 'react';

import { useUserContext } from '../../contexts/UserContext';

function Title() {
  const { user } = useUserContext();

  return (
    <>
      {user ?
        <h2>Welcome, {user.authData.name}!</h2>
        :
        <h2>Welcome to ReDI-Run-App!</h2>
      }
    </>
  );
}

export default Title;
