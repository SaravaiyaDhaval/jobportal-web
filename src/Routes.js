import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Containers/Home/Home.jsx';
import VerifyAccount from "./Containers/VerifyAccount/VerifyAccount.jsx";
import AddJob from "./Containers/AddJob/AddJob.jsx";
import DetailsView from  "./Containers/DetailsView/DetailsView.jsx";
import DashboardPage from "./pages/DashboardPage";
class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/add-job' exact component={AddJob} />
        <Route path='/details-view' exact component={DetailsView} />
        <Route path='/dashboard' exact component={DashboardPage} />
        <Route path='/VerifyAccount' exact component={VerifyAccount} />

      </Switch>
    );
  }
}

export default Routes;
