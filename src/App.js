import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        {/* Place Component Here */}
      </Route>
      {/* Add more Routes Here */}
    </Switch>
  </Router>
);

export default App;
