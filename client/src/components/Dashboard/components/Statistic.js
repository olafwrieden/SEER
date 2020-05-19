import React from "react";
import CountUp from "react-countup";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";

const Statistic = ({ value, text, bgcolor, change }) => (
  <div className="tile is-ancestor has-text-left">
    <div className="tile is-parent">
      <article className={`tile is-child box ${bgcolor}`}>
        <p className="has-text-white">
          <CountUp className="title has-text-white" end={value} />

          {/* Show stats change, if available */}
          {!!change && !isNaN(change) && (
            <span
              className="has-text-weight-light"
              style={{ paddingLeft: "10px" }}
            >
              {Math.sign(change) >= 0 ? <MdArrowUpward /> : <MdArrowDownward />}
              <span>{Math.abs(change)}</span>
            </span>
          )}
        </p>
        <p className="subtitle has-text-white">{text}</p>
      </article>
    </div>
  </div>
);

export default Statistic;
