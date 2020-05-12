import React from "react";

/**
 * Shows `You're All Caught Up` message.
 */
const CaughtUp = () => (
  <div className="has-text-centered has-text-primary">
    <i
      className="far fa-check-circle fa-4x"
      aria-hidden="true"
      style={{ marginBottom: "10px" }}
    ></i>
    <p className="subtitle has-text-centered">You're All Caught Up</p>
  </div>
);

export default CaughtUp;
