import React from "react";

const Entry = ({ title, type, date, author }) => {
  return (
    <div className="box has-background-light">
      <div className="columns is-gapless">
        {/* Icon */}
        <div className="column is-one-fifth">
          <i className={type.icon} aria-hidden="true"></i>
        </div>
        {/* Title */}
        <div className="column">
          <strong>{title}</strong>
        </div>
        {/* Action Buttons */}
        <div className="column is-one-fifth">
          <div className="buttons has-addons is-pulled-right">
            <button className="button is-success">
              <span className="icon is-small">
                <i className="fas fa-check"></i>
              </span>
              <span>Approve</span>
            </button>
            <button className="button is-danger">
              <span className="icon is-small">
                <i className="fas fa-trash"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* More Details */}
      <div className="columns is-gapless">
        <div className="column is-one-fifth">{date}</div>
        <div className="column">{author}</div>
        <div className="column is-one-fifth">
          <div className="buttons has-addons is-pulled-right">
            <p>No duplicate found</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entry;
