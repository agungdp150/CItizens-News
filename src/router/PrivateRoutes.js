import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoutes = ({
  component: Component,
  isAuthenticated: { token },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      !token ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);

PrivateRoutes.propTypes = {
  isAuthenticated: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    token: state.login1.token
  };
};

export default connect(mapStateToProps)(PrivateRoutes);
