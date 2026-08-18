import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { useUserContext } from '../../contexts/UserContext';
import Banner from '../Banner';
import Sidebar from '../Sidebar';
import TrainingInfo from '../TrainingPlan/TrainingInfo';
import TrainingPlan from '../TrainingPlan';
import Zones from '../Zones';
import UserProfile from '../UserProfile';
import Homepage from '../Homepage/';
import './styles.css';

const Main = () => {
  const { user } = useUserContext();

  return (
    <main>
      <Banner />
      <div className="content-container">
        <Sidebar />
        <div className="content">
          {user ?
            <Switch>
              <Route path="/training/info" component={TrainingInfo} />
              <Route path="/training" component={TrainingPlan} />
              <Route path="/zones" component={Zones} />
              <Route path="/profile" component={UserProfile} />
              <Route path="/home" component={Homepage} />
              <Route path="/" component={Homepage} />
            </Switch>
            :
            <>
              <Homepage />
              <Zones />
            </>
          }
        </div>
      </div>
    </main>
  );
};

export default Main;
