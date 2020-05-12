import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img
              src="images/logo-transparent.png"
              alt="Logo"
              height="28"
              onClick={() => setIsActive(false)}
            ></img>
          </Link>
          <div
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            data-target="navbarExampleTransparentExample"
            onClick={() => setIsActive(!isActive)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div
          id="navbarExampleTransparentExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <Link
              className="navbar-item"
              to="/"
              onClick={() => setIsActive(false)}
            >
              Home
            </Link>
            <Link
              className="navbar-item"
              to="/suggest"
              onClick={() => setIsActive(false)}
            >
              Suggest
            </Link>
            <Link
              className="navbar-item"
              to="/browse"
              onClick={() => setIsActive(false)}
            >
              Browse
            </Link>
            <Link
              className="navbar-item"
              to="/moderate"
              onClick={() => setIsActive(false)}
            >
              Moderate
            </Link>
            <Link
              className="navbar-item"
              to="/analyse"
              onClick={() => setIsActive(false)}
            >
              Analyse
            </Link>
            <Link
              className="navbar-item"
              to="/dashboard"
              onClick={() => setIsActive(false)}
            >
              Dashboard
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <Link
                    className="button is-primary is-outlined"
                    to="/register"
                    onClick={() => setIsActive(false)}
                  >
                    Register
                  </Link>
                </p>
                <p className="control">
                  <Link
                    className="button is-primary"
                    to="/login"
                    onClick={() => setIsActive(false)}
                  >
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
