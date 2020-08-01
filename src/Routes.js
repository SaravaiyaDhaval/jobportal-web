import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Containers/Home/Home.jsx';
import VerifyAccount from "./Containers/VerifyAccount/VerifyAccount.jsx";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/VerifyAccount' exact component={VerifyAccount} />

      </Switch>
    );
  }
}

export default Routes;
