import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../../Dashboard";
import Landing from "../../Landing";
import Moderation from "../../Moderation";
import Suggestion from "../../Suggestion";
import NotFound from "./NotFound";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/suggest" component={Suggestion} />
    <Route exact path="/moderate" component={Moderation} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route component={NotFound} />
  </Switch>
);

export default Router;
