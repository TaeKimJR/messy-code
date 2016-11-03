import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import '../assets/stylesheets/base.scss';

const App = props => (
  <div>
    <Link to="/">Messy Component 1</Link>
    <br />
    <Link to="/2">Messy Component 2</Link>
    <br />
    <Link to="/3">Messy Component 3</Link>
    <br />

    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
