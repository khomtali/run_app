import React from 'react';
import PropTypes from 'prop-types';
import ZoneRow from './ZoneRow';
import zonesDescription from '../../constants.js';

function ZonesTable(props) {
  const zones = props.output;
  const handleSubmit = event => {
    event.preventDefault();
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
            <ZoneRow key={index} range={element} description={zonesDescription[index]} />
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
