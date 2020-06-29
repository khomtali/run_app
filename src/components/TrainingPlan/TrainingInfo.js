import React from 'react';
import { Link } from 'react-router-dom';

import { trainingDescriptions } from '../../configurations/constants';
import TabHeader from '../common/TabHeader';
import Collapsible from '../common/Collapsible';
import './styles.css';

const TrainingInfo = () => {
  return (
    <div className="content__training">
      <TabHeader header="Training Descriptions" />
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
