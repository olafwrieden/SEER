import React from "react";

const Category = ({ type }) => (
  <div className="box has-background-info" style={{ cursor: "pointer" }}>
    <div className="columns is-gapless is-flex is-vcentered is-centered has-text-white">
      {/* Icon */}
      <div className="column is-one-fifth">
        <i className={type.icon} aria-hidden="true"></i>
      </div>
      {/* Title */}
      <div className="column has-text-white">
        <strong className="subtitle has-text-white">{type.name}</strong>
      </div>
    </div>
  </div>
);

export default Category;
