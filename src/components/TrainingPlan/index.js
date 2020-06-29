import React from 'react';

import TabHeader from '../common/TabHeader';
import TrainingPlanInput from './TrainingPlanInput';

const TrainingPlan = () => {
  const handleConfigSubmit = form => {
    console.log(form);
  };

  return (
    <div className="content__training">
      <TabHeader header="Training Plan" />
      <p>Feature coming soon!</p>
      <TrainingPlanInput onSubmit={handleConfigSubmit} />
    </div>
  );
};

export default TrainingPlan;
