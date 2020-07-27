import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Containers/Home/Home.jsx';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={Home} />

      </Switch>
    );
  }
}

export default Routes;
