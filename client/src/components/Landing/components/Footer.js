import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const { PUBLIC_URL } = process.env;

  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column is-4 has-text-centered is-hidden-tablet">
            <Link className="title is-4" to="/">
              <img
                src={`${PUBLIC_URL}/images/logo-dark.png`}
                alt="SEER"
                width="100"
              />
            </Link>
          </div>
          <div className="column is-4">
            <div className="level">
              <a className="level-item" href="/">
                Wiki
              </a>
            </div>
          </div>
          <div className="column is-4 has-text-centered is-hidden-mobile">
            <Link className="title is-4" to="/">
              <img
                src={`${PUBLIC_URL}/images/logo-dark.png`}
                alt="SEER"
                width="100"
              />
            </Link>
          </div>
          <div className="column is-4 has-text-right">
            <div className="level">
              <a
                className="level-item"
                href="https://www.github.com/olafwrieden/SEER"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <p className="subtitle has-text-centered is-6">
          &copy; 2020 SEER. All right reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
