import React from "react";
import CountUp from "react-countup";

const Statistic = ({ value, text, bgcolor }) => (
  <div className="tile is-ancestor has-text-left">
    <div className="tile is-parent">
      <article className={`tile is-child box ${bgcolor}`}>
        <p className="title has-text-white">
          <CountUp end={value} />
        </p>
        <p className="subtitle has-text-white">{text}</p>
      </article>
    </div>
  </div>
);

export default Statistic;
