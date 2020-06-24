import React from 'react';

import { zoneDescriptions } from '../../configurations/constants';
import ZoneButton from './ZoneButton';

const ZonesInfo = () => {
  return (
    <div className="content__zones__info">
      <h3>Getting to know your zones</h3>
      <p>
        Heart rate is useful in because it helps athletes avoid the single most common training mistake:
        pushing too hard in workouts that are supposed to be done at low intensity (Zones 1 and 2).
      </p>
      {zoneDescriptions.map((zone, index) =>
        <ZoneButton key={index} number={zone.number} description={zone.description} />
      )}
    </div>
  );
};

export default ZonesInfo;
