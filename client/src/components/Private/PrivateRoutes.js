// Dependencies
import React from "react";
import { Switch } from "react-router-dom";
// Components
import PrivateRoute from "../Common/PrivateRoute";
import Dashboard from "./Dashboard/Dashboard";
import NotFound from "../Common/NotFound";

const PrivateRoutes = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute component={NotFound} />
    </Switch>
  );
};

export default PrivateRoutes;
