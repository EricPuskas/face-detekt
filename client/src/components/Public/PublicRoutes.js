import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthRoutes from "../Auth/AuthRoutes";

// Components
import Landing from "./Landing/Landing";
import NotFound from "../Common/NotFound";

const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/" component={AuthRoutes} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default PublicRoutes;
