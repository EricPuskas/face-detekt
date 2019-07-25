import React from "react";
import { Route } from "react-router-dom";

const RouteProps = ({ component: Component, props, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} {...rest} />} />
);

export default RouteProps;
