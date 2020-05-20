import React from "react";
import { BsCheckCircle } from "react-icons/bs";

/**
 * Shows `You're All Caught Up` message.
 */
const CaughtUp = ({ children }) => (
  <div className="has-text-centered">
    <BsCheckCircle
      size="4em"
      className="has-text-primary"
      style={{ marginBottom: "10px" }}
    />
    <p className="subtitle has-text-centered">You're All Caught Up</p>
    <p className="has-text-centered">{children}</p>
  </div>
);

export default CaughtUp;
