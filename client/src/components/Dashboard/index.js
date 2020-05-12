import React from "react";
import Statistic from "./components/Statistic";

const Dashboard = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          {/* User Greeting */}
          <h1 className="title has-text-grey-light">
            Hello <span className="has-text-dark">John Appleseed</span>
          </h1>

          {/* Platform Statistics */}
          <div className="columns is-multiline">
            <div className="column is-6-tablet is-3-desktop">
              <Statistic
                value={8365}
                text="Total Entries"
                bgcolor="has-background-link"
              />
            </div>
            <div className="column is-6-tablet is-3-desktop">
              <Statistic
                value={24}
                text="Pending Analysis"
                bgcolor="has-background-info"
              />
            </div>
            <div className="column is-6-tablet is-3-desktop">
              <Statistic
                value={2172}
                text="In Moderation"
                bgcolor="has-background-danger"
              />
            </div>
            <div className="column is-6-tablet is-3-desktop">
              <Statistic
                value={392}
                text="Total Users"
                bgcolor="has-background-success"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
