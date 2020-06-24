import React from 'react';
import PropTypes from 'prop-types';

import { zoneTableInfos } from '../../configurations/constants';
import ZoneRow from './ZoneRow';

const ZonesTable = ({ zones, onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(zones);
  };

  return (
    <div>
      <table>
        <thead>
          <tr key="0">
            <th key="01">Heart Rate Range</th>
            <th key="02">Effort</th>
            <th key="03">Effect</th>
          </tr>
        </thead>
        <tbody>
          {zones.map((zone, index) =>
            <ZoneRow key={index} range={zone} description={zoneTableInfos[index]} />
          )}
        </tbody>
      </table>
      <form onSubmit={handleSubmit}>
        <button className="content__zones__input-form__button">Recalculate</button>
      </form>
    </div>
  );
};

ZonesTable.propTypes = {
  zones: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ZonesTable;
