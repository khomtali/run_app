import React from 'react';
import { Link } from 'react-router-dom';

import Collapsible from '../common/Collapsible';
import { trainingDescriptions } from '../../configurations/constants';

const TrainingInfo = () => {
  return (
    <div className="content__training">
      <h2>Training Descriptions</h2>
      <p><Link to="/training" className="back-link">Back</Link></p>
      {trainingDescriptions.map((training, index) =>
        <Collapsible key={index}
          name={training.trainingType}
          description={training.description}
        />
      )}
    </div>
  );
};

export default TrainingInfo;
