import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Dashboard from "../../Dashboard";
import Landing from "../../Landing";
import Moderation from "../../Moderation";
import Suggestion from "../../Suggestion";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/suggest" component={Suggestion} />
    <Route exact path="/moderate" component={Moderation} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route component={NotFound} />
  </Switch>
);

const NotFound = () => (
  <section className="hero is-bold is-medium">
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column is-1">
            <img
              src="images/question-mark.png"
              width="100px"
              alt="404 Not Found Icon"
            />
          </div>
          <div className="column">
            <h1 className="title">Oops!</h1>
            <h2 className="subtitle">
              The page you are looking for does not exist.
            </h2>
            <Link className="button" to="/">
              Take me Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Router;
