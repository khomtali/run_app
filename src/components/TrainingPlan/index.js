import React from 'react';

import { useUserContext } from '../../contexts/UserContext';

function TrainingPlan() {
  const { user } = useUserContext();

  return (
    <div>
      <h2>Your Training Plan</h2>
      {user ? (
        <p>feature coming soon!</p>
      )
      :
      (
        <p>you must create an account to use this feature</p>
      )}
    </div>
  );
}

export default TrainingPlan;
