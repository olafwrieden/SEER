import React from "react";
import { Route, Switch } from "react-router-dom";
import Analysis from "../../Analysis";
import Login from "../../Auth/Login";
import Logout from "../../Auth/Logout";
import Register from "../../Auth/Register";
import Dashboard from "../../Dashboard";
import Landing from "../../Landing";
import Moderation from "../../Moderation";
import Profile from "../../Profile";
import Search from "../../Search";
import Suggestion from "../../Suggestion";
import Submission from '../../Suggestion/components/Submission';
import { Role } from "../Authentication";
import ProtectedRoute from "../Authentication/ProtectedRoute";
import ErrorRoute from "./ErrorRoute";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/suggest" component={Suggestion} />
    <Route path="/suggest/:type" children={<Submission />} />
    <Route exact path="/moderate" component={Moderation} />
    <Route exact path="/dashboard" component={Dashboard} />
    <ProtectedRoute
      exact
      roles={[Role.MODERATOR, Role.ADMIN]}
      path="/moderate"
      component={Moderation}
    />
    <ProtectedRoute
      exact
      roles={[Role.ANALYST, Role.ADMIN]}
      path="/analyse"
      component={Analysis}
    />
    <ProtectedRoute
      exact
      roles={[Role.ADMIN]}
      path="/dashboard"
      component={Dashboard}
    />
    <Route exact path="/browse" component={Search} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/logout" component={Logout} />
    <Route exact path="/register" component={Register} />
    <ProtectedRoute exact path="/profile" component={Profile} />
    <Route component={ErrorRoute} />
  </Switch>
);

export default Router;
