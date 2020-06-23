import React from 'react';

import { useUserContext } from '../../contexts/UserContext';

function UserIcon() {
  const { user } = useUserContext();

  return (
    <>
      {user &&
        <img src={user.authData.picture} alt="user icon" className="header__inner__account__icon" />
      }
    </>
  );
}

export default UserIcon;
