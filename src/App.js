import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import AboutUs from './AboutUs.js'
import MainContent from "./MainContent";

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
    </Switch>
  </Router>

);

export default App;
