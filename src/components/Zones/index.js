import React, { useState, useEffect } from 'react';

import { useUserContext } from '../../contexts/UserContext';
import ZonesInput from './ZonesInput';
import ZonesTable from './ZonesTable';
import ZonesInfo from './ZonesInfo';
import ZoneDataModel from '../../models/ZoneDataModel';
import './styles.css';

const Zones = () => {
  const { user } = useUserContext();
  const [zones, setZones] = useState([]);

  useEffect(() => {
    if (user && user.age && user.resting_heart_rate) {
      const userData = new ZoneDataModel({ userAge: user.age, restRate: user.resting_heart_rate });
      setZones(userData.calculateZones);
    }
  }, [user]);

  const handleCalcSubmit = form => {
    const userInput = new ZoneDataModel(form);
    setZones(userInput.calculateZones);
  };

  const handleRecalcSubmit = () => {
    setZones([]);
  };

  return (
    <div className="content__zones">
      <h2>Heart Rate Zones</h2>
      {!zones.length ?
        <ZonesInput onSubmit={handleCalcSubmit} />
        :
        <ZonesTable zones={zones} onSubmit={handleRecalcSubmit} />
      }
      <ZonesInfo />
    </div>
  );
};

export default Zones;
