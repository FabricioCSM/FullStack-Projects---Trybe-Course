import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Wallet from './Wallet';

class Routes extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/carteira" component={ Wallet } />
        </Switch>
      </main>
    );
  }
}

export default Routes;
