import React from 'react';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import AboutUs from './AboutUs.js'
import MainContent from "./MainContent";
import DataInfo from './DataInfo.js'
import MapChart from './MapChart.js';
import Header from "./Header";

const App = () => (
  <div className="mainContainer">
    <Router>
      <Header />
      <Switch>
        <div className="sub-container">
          <Route path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <MainContent />
            <Home />
          </Route>
          <Route path="/AboutUs" exact>
            <AboutUs />
          </Route>
          <Route path="/DataInfo" >
            <DataInfo />
          </Route>
          <Route path="/MapChart" >
            <MapChart />
          </Route>
        </div>
      </Switch>
    </Router>
  </div>

);

export default App;
