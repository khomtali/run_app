import React, { useState } from 'react';
import CalculatorInput from './CalculatorInput';
import ZonesTable from './ZonesTable';
import ZoneDataModel from '../../models/ZoneDataModel';
import './Calculator.css';

function Calculator() {
  const [zones, setZones] = useState([]);

  const handleSubmit = form => {
    const userInput = new ZoneDataModel(form);
    setZones(userInput.calculateZones);
  };

  return (
    <div className="zone-calculator">
      <CalculatorInput onSubmit={handleSubmit} />
      <ZonesTable output={zones} />
    </div>
  );
}

export default Calculator;
