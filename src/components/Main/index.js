import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { useUserContext } from '../../contexts/UserContext';
import Banner from '../Banner';
import Sidebar from '../Sidebar';
import Calculator from '../Calculator';
import TrainingPlan from '../TrainingPlan';
import UserProfile from '../UserProfile';
import Homepage from '../Homepage/';
import './styles.css';

function Main() {
  const { user } = useUserContext();

  return (
    <main>
      <Banner />
      <div className="content-container">
        <Sidebar />
        <div className="content">
          {!user ?
            <>
              <Homepage />
              <Calculator />
            </>
            :
            <Switch>
              <Route path="/training" component={TrainingPlan} />
              <Route path="/zones" component={Calculator} />
              <Route path="/profile" component={UserProfile} />
              <Route path="/" component={Homepage} />
            </Switch>
          }
        </div>
      </div>
    </main>
  );
}

export default Main;
