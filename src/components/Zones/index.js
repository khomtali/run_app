import React, { useState } from 'react';

import { useUserContext } from '../../contexts/UserContext';
import ZonesInput from './ZonesInput';
import ZonesTable from './ZonesTable';
import ZonesInfo from './ZonesInfo';
import ZoneDataModel from '../../models/ZoneDataModel';
import './styles.css';

function Zones() {
  const { user } = useUserContext();
  const [zones, setZones] = useState([]);
  const userAge = 0;

  if (user) {
    const userAge = user.age;
  }
  console.log(userAge);
  // if (user.age && user.resting_heart_rate) {
  //   const userInput = new ZoneDataModel({ userAge: user.age, restRate: user.resting_heart_rate });
  //   setZones(userInput.calculateZones);
  // }

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
