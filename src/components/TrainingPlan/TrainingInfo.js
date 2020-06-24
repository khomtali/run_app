import React from 'react';

import Collapsible from '../common/Collapsible';

const TrainingInfo = ({ data }) => {
  return (
    <div className="content__training">
      <h2>Trainings Description</h2>
      {data.map(index =>
        <Collapsible key={index}
          name={data.fields.trainingType}
          description={data.fields.description}
        />
      )}
    </div>
  );
};

export default TrainingInfo;
