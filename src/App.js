import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import AboutUs from './AboutUs.js'
<<<<<<< HEAD
import MainContent from "./MainContent";
=======
import DataInfo from './DataInfo.js'
import MapChart from './MapChart.js';
>>>>>>> 203cd9a54e6acf8b32b488e30cfbe7766a688c2a

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
