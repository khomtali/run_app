import React from 'react';
import { Link } from 'react-router-dom';

import TrainingPlanInput from './TrainingPlanInput';
import './styles.css';

const TrainingPlan = () => {
  const handleConfigSubmit = form => {
    console.log(form);
  };

  return (
    <div className="content__training">
      <h2>Training Plan</h2>
      <p><Link to="/training/info" className="info-link">Read training descriptions</Link></p>
      <TrainingPlanInput onSubmit={handleConfigSubmit} />
    </div>
  );
};

export default TrainingPlan;
