import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoutes = ({
  component: Component,
  isAuthenticated: { isAuthenticated },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated ? 
      <Redirect to="/" /> 
      : 
      <Component {...props} />
    }
  />
);

PrivateRoutes.propTypes = {
  isAuthenticated: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.login1
  };
};

export default connect(mapStateToProps)(PrivateRoutes);
