import React from "react";

const Category = ({ type }) => (
  <div className="box notification is-light" style={{ cursor: "pointer" }}>
    <div className="columns is-gapless is-flex is-vcentered is-centered">
      {/* Icon */}
      <div className="column is-one-fifth">
        <i className={type.icon} aria-hidden="true"></i>
      </div>
      {/* Title */}
      <div className="column">
        <strong>{type.name}</strong>
      </div>
    </div>
  </div>
);

export default Category;
