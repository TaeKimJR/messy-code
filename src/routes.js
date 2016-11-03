import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import MessyComponent1 from './components/MessyComponent1';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MessyComponent1} />
  </Route>
);
