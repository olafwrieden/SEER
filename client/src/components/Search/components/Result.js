import React from "react";

const Result = ({ title, type, date, author, descriptor }) => {
  return (
    <div className="box">
      <div className="columns is-gapless">
        {/* Icon */}
        <div className="column is-one-fifth">
          <i className={type.icon} aria-hidden="true"></i>
        </div>

        <div className="column">
          <strong>{title}</strong>
        </div>
      </div>

      <div className="columns is-gapless">
        <div className="column is-one-fifth">{date}</div>
        <div className="column">{descriptor}</div>
        <div className="column is-one-fifth">
          <p>{author}</p>
        </div>
      </div>
    </div>
  );
};

export default Result;
