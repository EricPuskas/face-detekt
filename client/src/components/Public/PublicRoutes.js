import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Landing from "./Landing/Landing";
import NotFound from "../Common/NotFound";

const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default PublicRoutes;
