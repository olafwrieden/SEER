import React, { useState } from "react";
import { FiSave, FiX } from "react-icons/fi";

const EditAvatar = ({ isOpen, toggle, url }) => {
  const [avatarURL, setAvatarURL] = useState(url);

  // Reset on Back Button Click
  const handleBackButton = () => {
    setAvatarURL(url);
    toggle();
  };

  return (
    <div className={`modal ${isOpen ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Edit Avatar</p>
          <button
            className="delete"
            aria-label="close"
            onClick={handleBackButton}
          ></button>
        </header>

        <section className="modal-card-body">
          {/* Avatar URL Field */}
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Publicly accessible image URL</label>
                <div className="control">
                  <input
                    onChange={(e) => setAvatarURL(e.target.value)}
                    value={avatarURL}
                    className={`input ${false ? "is-danger" : ""}`} // TODO: Validate Input
                    id="url"
                    name="url"
                    type="text"
                    placeholder="A link to a publicly accessible photo"
                    disabled
                  />
                  <p className="help is-danger">
                    This feature is coming soon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="modal-card-foot">
          <button disabled className="button is-success">
            <span className="icon">
              <FiSave />
            </span>
            <span>Save</span>
          </button>
          <button className="button is-danger" onClick={handleBackButton}>
            <span className="icon is-small">
              <FiX />
            </span>
            <span>Cancel</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default EditAvatar;
