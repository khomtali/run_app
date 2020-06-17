import React from 'react';
import { useUserContext } from '../../contexts/UserContext';

function UserProfile(props) {
  const { user } = useUserContext();

  return (
    <div>
      <h2>{user.authData.nickname}'s Profile</h2>
      <p>Your age:{user.age}</p>
    </div>
  );
};

export default UserProfile;
