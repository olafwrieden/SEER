import React, { useEffect, useState } from "react";
import { useAuth } from "../App/Authentication";
import Statistic from "./components/Statistic";
import UserOverview from "./components/UserOverview";
import UserTable from "./components/UserTable";

const Dashboard = () => {
  const { user } = useAuth();
  const name = `${user.first_name} ${user.last_name}`;

  const [data, setData] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("/api/v1/admin/stats", {
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((response) =>
        response?.evidence ? setData(response.evidence) : setData(null)
      )
      .then((data) => console.log(data));
  }, []);

  useEffect(() => {
    fetch("/api/v1/admin/stats", {
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((response) =>
        response?.users ? setUserData(response.users) : setUserData(null)
      )
      .then((data) => console.log(data));
  }, []);

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
              {/* {data.evidence.map(({total}) => ( */}
              <Statistic
                value={data.total} // data.evidence.total
                text="Total Entries"
                bgcolor="has-background-link"
              />
              {/* ))} */}
            </div>
            <div className="column is-6-tablet is-3-desktop">
              <Statistic
                value={data.pendingApproval} // data.evidence.pendingApproval
                text="In Moderation"
                bgcolor="has-background-info"
              />
            </div>
            <div className="column is-6-tablet is-3-desktop">
              <Statistic
                value={data.pendingAnalysis} // data.evidence.pendingAnalysis
                text="Pending Analysis"
                bgcolor="has-background-danger"
              />
            </div>
            <div className="column is-6-tablet is-3-desktop">
              <Statistic
                value={userData.total} // data.users.total
                change={userData.newInLast24}
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
                standard={userData.standard} // data.users.standard
                moderators={userData.moderator}
                analysts={userData.analyst}
                admins={userData.admin}
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
