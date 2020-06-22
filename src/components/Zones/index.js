import React, { useState } from 'react';

import ZonesInput from './ZonesInput';
import ZonesTable from './ZonesTable';
import ZonesInfo from './ZonesInfo';
import ZoneDataModel from '../../models/ZoneDataModel';
import './styles.css';

function Zones() {
  const [zones, setZones] = useState([]);

  const handleSubmit = form => {
    const userInput = new ZoneDataModel(form);
    setZones(userInput.calculateZones);
  };

  return (
    <div className="content__zones">
      {!zones.length ?
        <ZonesInput onSubmit={handleSubmit} />
        :
        <ZonesTable output={zones} />
      }
      <ZonesInfo />
    </div>
  );
}

export default Zones;
