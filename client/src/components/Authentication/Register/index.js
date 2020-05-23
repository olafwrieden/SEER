import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-4-desktop is-6-tablet">
            <form>
              <h1 className="title">Register</h1>
              <h2 className="subtitle">More features are waiting</h2>

              {/* Name Fields */}
              <div className="columns is-mobile">
                {/* First */}
                <div className="column">
                  <div className="field">
                    <label className="label">First Name</label>
                    <div className="control">
                      <input
                        className="input"
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="John"
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Last */}
                <div className="column">
                  <div className="field">
                    <label className="label">Last Name</label>
                    <div className="control">
                      <input
                        className="input"
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Appleseed"
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Field */}
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    id="email"
                    name="email"
                    type="text"
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
                    placeholder="*******"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-primary">
                    <span className="icon is-small">
                      <FiCheck />
                    </span>
                    <span>Register</span>
                  </button>
                </div>
                <div className="control">
                  <Link className="button is-outlined" to="/login">
                    I already have an account
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

export default Register;
