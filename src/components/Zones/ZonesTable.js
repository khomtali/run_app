import React from 'react';
import PropTypes from 'prop-types';

import { zoneTableInfos } from '../../configurations/constants';
import ZoneRow from './ZoneRow';
import FormButton from '../common/FormButton';

const ZonesTable = ({ zones, onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(zones);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Heart Rate Range</th>
            <th>Effort</th>
            <th>Effect</th>
          </tr>
        </thead>
        <tbody>
          {zones.map((zone, index) =>
            <ZoneRow key={index} range={zone} description={zoneTableInfos[index]} />
          )}
        </tbody>
      </table>
      <form onSubmit={handleSubmit}>
        <FormButton label="Recalculate" />
      </form>
    </div>
  );
};

ZonesTable.propTypes = {
  zones: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ZonesTable;
