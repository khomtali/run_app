import React from 'react';

import TrainingPlanInput from './TrainingPlanInput';
import './styles.css';

const TrainingPlan = () => {
  const handleConfigSubmit = form => {
    console.log(form);
  };

  return (
    <div className="content__training">
      <h2>Training Plan</h2>
      <p>Feature coming soon!</p>
      <TrainingPlanInput onSubmit={handleConfigSubmit} />
    </div>
  );
};

export default TrainingPlan;
