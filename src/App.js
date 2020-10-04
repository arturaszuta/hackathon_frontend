import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import AboutUs from './AboutUs.js'
import MainContent from "./MainContent";
import DataInfo from './DataInfo.js'
import MapChart from './MapChart.js';

const App = () => (
  <Router>
    <MainContent />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/AboutUs" >
        <AboutUs />
      </Route>
      <Route path="/DataInfo" >
        <DataInfo />
      </Route>
      <Route path="/MapChart" >
        <MapChart />
      </Route>
    </Switch>
  </Router>

);

export default App;
