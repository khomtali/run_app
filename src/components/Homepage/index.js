import React from 'react';

import Title from './Title';
import AppDescription from './AppDescription';
import './styles.css';

function Homepage() {
  return (
    <div className="content__home">
      <Title />
      <AppDescription />
    </div>
  );
}

export default Homepage;
