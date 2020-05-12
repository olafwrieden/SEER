import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Landing from "../../Landing";
import Moderation from "../../Moderation";
import Suggestion from "../../Suggestion";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/suggest" component={Suggestion} />
    <Route exact path="/moderate" component={Moderation} />
    <Route component={NotFound} />
  </Switch>
);

const NotFound = () => (
  <section className="hero is-bold is-medium">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">Oops!</h1>
        <h2 className="subtitle">
          The page you are looking for does not exist.
        </h2>
        <Link className="button" to="/">
          Take me Home
        </Link>
      </div>
    </div>
  </section>
);

export default Router;
