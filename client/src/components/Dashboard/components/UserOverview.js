import React, { useState } from "react";
import { FiUserPlus, FiUsers } from "react-icons/fi";
import NewUser from "./NewUser";

const Counter = ({ title, count }) => (
  <div className="column">
    <p className="has-text-grey">{title}</p>
    <p className="subtitle">
      <b>{isNaN(count) ? "--" : count}</b>
    </p>
  </div>
);

const UserOverview = ({ standard, moderators, analysts, admins, actions }) => {
  const [showNewUserModal, setShowNewUserModal] = useState(false);
  const toggleNewUserModal = () => setShowNewUserModal(!showNewUserModal);

  return (
    <>
      <div className="box has-text-centered">
        <h2 className="subtitle">User Overview</h2>

        {/* Statistics */}
        <div className="columns is-mobile is-multiline">
          <Counter title="Standard" count={standard} />
          <Counter title="Moderators" count={moderators} />
        </div>
        <div className="columns is-mobile is-multiline">
          <Counter title="Analysts" count={analysts} />
          <Counter title="Admins" count={admins} />
        </div>

        {/* Actions */}
        {actions && (
          <div className="buttons has-addons is-centered is-paddingless">
            <div
              className="columns is-mobile is-multiline is-gapless"
              style={{ width: "100%" }}
            >
              <button
                className="column button is-primary is-light is-fullwidth"
                onClick={toggleNewUserModal}
              >
                <span className="icon">
                  <FiUserPlus />
                </span>
                <span>New</span>
              </button>
              <button className="column button is-link is-light is-fullwidth">
                <span className="icon">
                  <FiUsers />
                </span>
                <span>View</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* New User Modal */}
      <NewUser isOpen={showNewUserModal} toggle={toggleNewUserModal} />
    </>
  );
};

export default UserOverview;
