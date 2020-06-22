import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { useUserContext } from '../../contexts/UserContext';
import Banner from '../Banner';
import Sidebar from '../Sidebar';
import Zones from '../Zones';
import TrainingPlan from '../TrainingPlan';
import UserProfile from '../UserProfile';
import Title from '../Sidebar/Title';
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
            <Zones />
            :
            <Switch>
              <Route path="/training" component={TrainingPlan} />
              <Route path="/zones" component={Zones} />
              <Route path="/profile" component={UserProfile} />
              <Route path="/home" component={Title} />
            </Switch>
          }
        </div>
      </div>
    </main>
  );
}

export default Main;
