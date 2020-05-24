import React from "react";
import { useAuth } from "../App/Authentication";

const Profile = () => {
  const { user } = useAuth();
  const name = `${user?.first_name} ${user?.last_name}`;

  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="title">My Profile</h1>
          <h2 className="subtitle">Manage your SEER identity.</h2>
        </div>
      </section>

      <section className="section">
        <div className="container is-vcentered">
          <div className="columns">
            {/* Sidebar */}
            <div className="column box">
              {/* Avatar */}
              <div className="columns is-flex is-centered">
                <div className="column has-text-centered">
                  <figure className="image is-128x128 is-inline-block">
                    <img
                      className="is-rounded"
                      src={user?.avatar}
                      alt="Profile Avatar"
                    />
                  </figure>
                </div>
              </div>

              <div className="columns is-multiline">
                {/* Name */}
                <div className="column is-12">
                  <h3 className="is-size-4 has-text-centered">{name}</h3>
                </div>
                {/* Account Type */}
                <div className="column is-12">
                  <div className="tags has-addons is-centered">
                    <span className="tag is-primary">TYPE</span>
                    <span className="tag">{user?.role}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Spacer */}
            <div className="column is-1"></div>
            {/* Body */}
            <div className="column is-two-thirds box"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
