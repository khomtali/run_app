import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import { Heart } from 'react-spinners-css';

import App from '../../App';
import './styles.css';

function LoadingApp() {
  const { promiseInProgress } = usePromiseTracker();

  return (
    <>
      {
        (promiseInProgress === true) ?
          <div id="loading">
            <Heart color="#4bd0a0" />
          </div>
          :
          <App />
      }
    </>
  );
}

export default LoadingApp;
