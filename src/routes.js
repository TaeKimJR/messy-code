import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import MessyComponent1 from './components/MessyComponent1';
import MessyComponent2 from './components/MessyComponent2';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MessyComponent1} />
    <Route path="/2" component={MessyComponent2} />
  </Route>
);
