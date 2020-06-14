import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useUserContext } from './contexts/UserContext';
import Header from './components/header';
import Banner from './components/Banner';
import Sidebar from './components/sidebar';
import TrainingPlan from './components/training';
import Calculator from './components/calculator';
import UserProfile from './components/user-profile';
import Footer from './components/footer/';
import './App.css';

function App() {
  const { user } = useUserContext();

  return (
    <Router>
      <Header />
      <main>
        <Banner />
        <div className="content-container">
          <Sidebar />
          <div className="content">
            {!user ?
              <Calculator />
              :
              <Switch>
                <Route path="/training" component={TrainingPlan} />
                <Route path="/zones" component={Calculator} />
                <Route path="/profile" component={UserProfile} />
              </Switch>
            }
          </div>
        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
