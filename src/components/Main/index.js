import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';

import { useUserContext } from '../../contexts/UserContext';
import { getTrainingTables } from '../../configurations/getTrainingTables';
import Banner from '../Banner';
import Sidebar from '../Sidebar';
import TrainingInfo from '../TrainingPlan/TrainingInfo';
import TrainingPlan from '../TrainingPlan';
import Zones from '../Zones';
import UserProfile from '../UserProfile';
import Homepage from '../Homepage/';
import './styles.css';

const getInfo = async (cb) => {
  cb(await getTrainingTables());
};

const Main = () => {
  const { user } = useUserContext();

  const [data, setData] = useState();
  useEffect(() => {
    getInfo((data) => {
      setData(data);
      console.log(data);
    })
  }, []);

  return (
    <main>
      <Banner />
      <div className="content-container">
        <Sidebar />
        <div className="content">
          {user ?
            <Switch>
              <Route path="/training/info">{props => <TrainingInfo data={data} {...props} />}</Route>
              {/* <Route path="/training/info" component={TrainingInfo} /> */}
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
