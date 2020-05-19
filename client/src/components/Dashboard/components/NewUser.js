import React, { useState } from "react";
import { FiUserPlus } from "react-icons/fi";
import { RiCheckLine, RiDeleteBin2Line } from "react-icons/ri";

const NewUser = ({ isOpen, toggle }) => {
  const [userRole, setUserRole] = useState("standard");

  return (
    <div className={`modal ${isOpen ? "is-active" : "ƒ"}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        {/* Modal Header */}
        <header className="modal-card-head has-background-white">
          <p
            className="modal-card-title"
            style={{ display: "flex", alignItems: "center" }}
          >
            <FiUserPlus /> <span style={{ paddingLeft: "10px" }}>New User</span>
          </p>
          <button
            className="delete"
            aria-label="close"
            onClick={() => toggle()}
          ></button>
        </header>

        {/* Modal Body */}
        <section className="modal-card-body">
          <div className="columns">
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
                    required
                  />
                </div>
              </div>
            </div>
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
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control">
                  <input
                    className="input"
                    id="email"
                    name="email"
                    type="text"
                    placeholder="john.appleseed@example.com"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="********"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Organisation (optional)</label>
                <div className="control">
                  <input
                    className="input"
                    id="organisation"
                    name="organisation"
                    type="text"
                    placeholder="Example Ltd."
                  />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label">System Role</label>
                <div className="control has-icons-left">
                  <div
                    className={`select is-fullwidth ${
                      userRole === "admin" ? "is-danger" : ""
                    }`}
                    id="role"
                    name="role"
                  >
                    <select
                      onChange={(e) => setUserRole(e.target.value)}
                      required
                    >
                      <option value="standard" defaultValue>
                        Standard
                      </option>
                      <option value="moderator">Moderator</option>
                      <option value="analyst">Analyst</option>
                      <option value="admin">Admin</option>
                    </select>
                    {userRole === "admin" ? (
                      <p className="help is-danger">
                        Warning: This user may demote you.
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="icon is-small is-left">
                    <i className="fas fa-user-shield"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Account Options</label>
                <label
                  className="checkbox"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <input type="checkbox" defaultChecked />
                  <span style={{ paddingLeft: "5px" }}>Enabled</span>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Modal Footer */}
        <footer className="modal-card-foot has-background-white">
          <button className="button is-success" disabled>
            <span className="icon is-small">
              <RiCheckLine />
            </span>
            <span>Create User</span>
          </button>
          <button className="button" onClick={() => toggle()}>
            <span className="icon is-small">
              <RiDeleteBin2Line />
            </span>
            <span>Cancel</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default NewUser;
