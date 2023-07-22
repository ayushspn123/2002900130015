import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllTrains from './AllTrains';
import SingleTrain from './SingleTrain';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllTrains} />
        <Route path="/train/:trainId" component={SingleTrain} />
      </Switch>
    </Router>
  );
};

export default Routes;
