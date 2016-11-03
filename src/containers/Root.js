import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import routes from '../routes';

const Root = (props) => {
  const { history } = props;
  return (
    <Router history={history} routes={routes} />
  );
};

Root.propTypes = {
  history: PropTypes.object,
};

export default Root;
