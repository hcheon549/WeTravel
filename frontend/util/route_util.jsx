import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const Protected = ({ component: Component, path, loggedIn }) => {
  return (
    <Route path={path} render={(props) => (
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    )}/>
  )
};

// access the Redux state to check if the user is logged in
const msp = state => {
  return { loggedIn: Boolean(state.session.id) };
}

// connect Protected to the redux state
export const ProtectedRoute = withRouter(connect(msp)(Protected));