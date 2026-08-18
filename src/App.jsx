import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";

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
            <div className="loading-spinner" role="status" aria-label="Loading" />
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
