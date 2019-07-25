import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// Actions
import {
  loginUser,
  registerUser,
  clearErrors
} from "../../actions/authActions";
import Login from "./Login/Login";
import Register from "./Register/Register";
import NotFound from "../Common/NotFound";
import Route from "../Common/RouteProps";

const AuthRoutes = ({ loginUser, registerUser, clearErrors, auth, errors }) => {
  const { error } = errors;
  const { isAuthenticated, loading } = auth;

  if (isAuthenticated) {
    clearErrors();
    return <Redirect to="/dashboard" />;
  }

  return (
    <Switch>
      <Route
        exact
        path="/auth/login"
        error={error}
        login={loginUser}
        clearErrors={clearErrors}
        loading={loading}
        component={Login}
      />
      <Route
        exact
        path="/auth/register"
        error={error}
        register={registerUser}
        clearErrors={clearErrors}
        loading={loading}
        component={Register}
      />
      <Route component={NotFound} />
    </Switch>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser, registerUser, clearErrors }
)(AuthRoutes);
