import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import { Heart } from 'react-spinners-css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
  const { promiseInProgress } = usePromiseTracker();

  return (
    <>
      {
        (promiseInProgress === true) ?
          <div id="loading">
            <Heart color="#4bd0a0" />
          </div>
          :
          <>
            <Header />
            <Main />
            <Footer />
          </>
      }
    </>
  );
}

export default App;
