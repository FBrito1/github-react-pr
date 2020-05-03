import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import UserDetails from './pages/UserDetails';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/user-details" component={UserDetails} />
      </Switch>
    </BrowserRouter>
  );
}
