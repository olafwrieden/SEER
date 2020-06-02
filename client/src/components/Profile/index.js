import React, { useState } from "react";
import { FiEdit, FiEye } from "react-icons/fi";
import { useAuth } from "../App/Authentication";
import EditAvatar from "./components/EditAvatar";
import "./Profile.css";

const Profile = () => {
  const { user } = useAuth();
  const name = `${user?.first_name} ${user?.last_name}`;

  const [editAvatar, setEditAvatar] = useState(false);
  const toggleEditAvatar = () => setEditAvatar(!editAvatar);

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
                  <figure
                    className="image is-128x128 is-inline-block img-edit"
                    onClick={toggleEditAvatar}
                  >
                    <img
                      className="is-rounded avatar"
                      src={user?.avatar}
                      alt="Profile Avatar"
                    />
                    <div className="middle has-text-dark">
                      <FiEdit size="25px" />
                    </div>
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

                <div className="column is-12">
                  <h3 className="is-size-5 has-text-centered">
                    <strong>Email: </strong>
                    {user?.email}
                  </h3>
                </div>

                {user?.organisation && (
                  <div className="column is-12">
                    <h3 className="is-size-5 has-text-centered">
                      <strong>Organisation: </strong>
                      {user?.organisation}
                    </h3>
                  </div>
                )}
              </div>
            </div>
            {/* Spacer */}
            <div className="column is-1"></div>
            {/* Body */}
            <div
              className="column is-two-thirds box is-fullwidth"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="has-text-centered">
                <FiEye size="4em" className="has-text-primary" />
                <p className="subtitle has-text-centered">Coming Soon</p>
                <p className="has-text-centered">
                  Good things come to those who wait (or get early access{" "}
                  <span role="img" aria-label="emoji">
                    😉
                  </span>
                  )
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {user?.avatar ? (
        <EditAvatar
          isOpen={editAvatar}
          toggle={toggleEditAvatar}
          url={user?.avatar}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Profile;
