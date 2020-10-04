import React from 'react';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import AboutUs from './AboutUs.js'
import MainContent from "./MainContent";
import DataInfo from './DataInfo.js'
import MapChart from './MapChart.js';
import Header from "./Header";
import MapChartSweden from './MapChartSweden'

const App = () => (
  <div className="mainContainer">
    <Router>
      <Header />
      <Switch>
        <Redirect from="/" to="/home" exact />
        <Route path="/home" exact>
          <MainContent />
          <Home />
        </Route>
        <Route path="/AboutUs" exact>
          <AboutUs />
        </Route>
        <Route path="/DataInfo" exact>
          <DataInfo />
        </Route>
        <Route path="/MapChart" exact>
          <MapChart />
        </Route>
        <Route path="/MapChartSweden" exact>
          <MapChartSweden />
        </Route>
      </Switch>
    </Router>
  </div >
);

export default App;
