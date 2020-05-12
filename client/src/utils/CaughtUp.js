import React from "react";

/**
 * Shows `You're All Caught Up` message.
 */
const CaughtUp = ({ children }) => (
  <div className="has-text-centered">
    <i
      className="far fa-check-circle fa-4x has-text-primary"
      aria-hidden="true"
      style={{ marginBottom: "10px" }}
    ></i>
    <p className="subtitle has-text-centered">You're All Caught Up</p>
    <p className="has-text-centered">{children}</p>
  </div>
);

export default CaughtUp;
