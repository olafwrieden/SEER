import React from "react";
import { useAuth } from "../../App/Authentication";

const Logout = ({ history, location }) => {
  const { signout, isAuthed } = useAuth();

  let { from } = { from: { pathname: "/login" } };
  if (isAuthed) history.replace(from);

  signout();

  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Logging out</h2>
        <p className="subtitle">Please wait while we log you out.</p>
      </div>
    </section>
  );
};

export default Logout;
