import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const { PUBLIC_URL } = process.env;

  return (
    <section className="hero is-bold is-medium">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-1">
              <img
                src={`${PUBLIC_URL}/images/question-mark.png`}
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
};

export default NotFound;
