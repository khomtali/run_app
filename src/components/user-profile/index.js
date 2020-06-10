import React from 'react';
import { useUserContext } from '../../contexts/UserContext';
// import PropTypes from 'prop-types';

function UserProfile(props) {
  const { user } = useUserContext();

  return (
    <div>
      <h2>{user.authData.nickname}'s Profile</h2>
      <p>Your age:{user.fields.age}</p>
    </div>
  );
};

// UserProfile.propTypes = {
// };

export default UserProfile;
