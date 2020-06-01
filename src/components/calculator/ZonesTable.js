import React from 'react';
import PropTypes from 'prop-types';
import ZoneRow from './ZoneRow';

function ZonesTable(props) {
  const zones = props.output;
  const zonesDescription = {
    1: {
      effort: 'Very light, 50-60%',
      effect: 'Healthy Heart Zone'
    },
    2: {
      effort: 'Light, 60-70%',
      effect: 'Temperate Zone'
    },
    3: {
      effort: 'Moderate, 70-80%',
      effect: 'Aerobic Zone'
    },
    4: {
      effort: 'Hard, 80-90%',
      effect: 'Threshold Zone'
    },
    5: {
      effort: 'Very hard, 90-100%',
      effect: 'Perfomance Redline Zone'
    },
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <div className="zone-calculator__table">
      <table>
        <thead>
          <tr key="0">
            <th key="01">Heart Rate Range</th>
            <th key="02">Effort</th>
            <th key="03">Effect</th>
          </tr>
        </thead>
        <tbody>
          {zones.map((element, index) =>
            <ZoneRow range={element} description={zonesDescription[index + 1]} index={index} />
          )}
        </tbody>
      </table>
      <form onSubmit={handleSubmit}>
        <button>Recalculate</button>
      </form>
    </div>
  )
}

ZonesTable.propTypes = {
  output: PropTypes.array.isRequired
};

export default ZonesTable;
