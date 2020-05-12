import React from "react";
import CountUp from 'react-countup';

const Statistic = ({ value, text }) => (
  <div className="tile is-ancestor has-text-centered">
    <div className="tile is-parent">
      <article className="tile is-child box notification is-dark">
        <p className="title">
          <CountUp end={value} />
        </p>
        <p className="subtitle">{text}</p>
      </article>
    </div>
  </div>
);

export default Statistic;
