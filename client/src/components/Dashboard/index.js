import React from "react";
import Statistic from "./components/Statistic";

const Dashboard = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-6-tablet is-3-desktop">
              <Statistic value={8365} text="Total Entries" />
            </div>
            <div className="column is-6-tablet is-3-desktop">
              <Statistic value={392} text="Total Users" />
            </div>
            <div className="column is-6-tablet is-3-desktop">
              <Statistic value={2172} text="In Moderation" />
            </div>
            <div className="column is-6-tablet is-3-desktop">
              <Statistic value={24} text="Pending Analysis" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
