import React from "react";
import { useAuth } from "../App/Authentication";
import Statistic from "./components/Statistic";
import UserOverview from "./components/UserOverview";
import UserTable from "./components/UserTable";

const Dashboard = () => {
  const { user } = useAuth();
  const name = `${user.first_name} ${user.last_name}`;

  return (
    <>
      <section className="section">
        <div className="container">
          {/* User Greeting */}
          <h1 className="title has-text-grey-light">
            Hello <span className="has-text-dark">{name}</span>
          </h1>

          {/* Platform Statistics */}
          <div className="columns is-multiline">
            <div className="column is-6-tablet is-3-desktop">
              <Statistic
                value={8365}
                change={3}
                text="Total Entries"
                bgcolor="has-background-link"
              />
            </div>
            <div className="column is-6-tablet is-3-desktop">
              <Statistic
                value={2172}
                text="In Moderation"
                bgcolor="has-background-info"
              />
            </div>
            <div className="column is-6-tablet is-3-desktop">
              <Statistic
                value={24}
                text="Pending Analysis"
                bgcolor="has-background-danger"
              />
            </div>
            <div className="column is-6-tablet is-3-desktop">
              <Statistic
                value={0}
                change={1}
                text="Total Users"
                bgcolor="has-background-success"
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-6-tablet is-3-desktop"></div>
            <div className="column is-6-tablet is-3-desktop"></div>
            <div className="column is-6-tablet is-3-desktop"></div>
            <div className="column is-6-tablet is-3-desktop">
              <UserOverview
                standard={354}
                moderators={22}
                analysts={32}
                admins={3}
                actions
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="columns">
            <div className="column">
              <UserTable />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
