import React, { useState } from 'react';

import ZonesInput from './ZonesInput';
import ZonesTable from './ZonesTable';
import ZonesInfo from './ZonesInfo';
import ZoneDataModel from '../../models/ZoneDataModel';
import './styles.css';

function Zones() {
  const [zones, setZones] = useState([]);

  const handleCalcSubmit = form => {
    const userInput = new ZoneDataModel(form);
    setZones(userInput.calculateZones);
  };
  const handleRecalcSubmit = () => {
    setZones([]);
  };

  return (
    <div className="content__zones">
      {!zones.length ?
        <ZonesInput onSubmit={handleCalcSubmit} />
        :
        <ZonesTable output={zones} onSubmit={handleRecalcSubmit} />
      }
      <ZonesInfo />
    </div>
  );
}

export default Zones;
