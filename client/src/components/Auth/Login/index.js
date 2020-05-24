import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../App/Authentication";

const Login = ({ history, location }) => {
  const { signin, isAuthed } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Reditect to previous page or home page
  let { from } = location.state || { from: { pathname: "/" } };
  if (isAuthed) history.replace(from); // FIXME: Updates state during transition

  const handleLogin = (e) => {
    e.preventDefault();
    signin(email, password).then(() => history.replace(from));
  };

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-4-desktop is-6-tablet">
            <form>
              <h1 className="title">Welcome</h1>
              <h2 className="subtitle">Log in to continue.</h2>

              {/* Email Field */}
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    id="email"
                    name="email"
                    type="text"
                    value={email}
                    placeholder="john@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    placeholder="*******"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {/* <Link to="/register">Forgot Password?</Link> */}
              </div>

              {/* Buttons */}
              <div className="field is-grouped">
                <div className="control">
                  <button
                    className="button is-primary"
                    onClick={(e) => handleLogin(e)}
                  >
                    <span className="icon is-small">
                      <FaPaperPlane />
                    </span>
                    <span>Login</span>
                  </button>
                </div>
                <div className="control">
                  <Link className="button is-outlined" to="/register">
                    I don't have an account
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
