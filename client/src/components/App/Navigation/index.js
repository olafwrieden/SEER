import React, { useState } from "react";
import { BsChat } from "react-icons/bs";
import { FiPower, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "../Authentication";

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);
  const { isAuthed, user } = useAuth();
  const { PUBLIC_URL } = process.env;

  const name = `${user?.first_name} ${user?.last_name}`;

  return (
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img
              src={`${PUBLIC_URL}/images/logo-dark.png`}
              alt="Logo"
              height="28"
              onClick={() => setIsActive(false)}
            ></img>
          </Link>
          <div
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            data-target="navbar"
            onClick={() => setIsActive(!isActive)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div
          id="navbar"
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
                {isAuthed ? (
                  <div className="navbar-item has-dropdown is-hoverable">
                    <Link to="/profile" className="navbar-item">
                      <img
                        src={user?.avatar}
                        height={28}
                        style={{ borderRadius: "50%" }}
                      />
                      <span style={{ marginLeft: "10px" }}>{name}</span>
                    </Link>
                    <div
                      className="navbar-dropdown is-right"
                      style={{ borderTop: "none" }}
                    >
                      <Link to="/suggest" className="navbar-item">
                        <span className="icon">
                          <BsChat />
                        </span>
                        <span>Suggest</span>
                      </Link>
                      <hr className="navbar-divider" />
                      <Link to="/profile" className="navbar-item">
                        <span className="icon">
                          <FiUser />
                        </span>
                        <span>Profile</span>
                      </Link>
                      <Link to="/logout" className="navbar-item">
                        <span className="icon">
                          <FiPower />
                        </span>
                        <span>Logout</span>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
