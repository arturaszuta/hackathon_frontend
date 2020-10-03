import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MapChart from './MapChart.js';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
      </Route>
      <Route path="/map-chart" exact>
        <MapChart />
      </Route>
      {/* Add more Routes Here */}
    </Switch>
  </Router>
);

export default App;
