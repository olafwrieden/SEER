import React from "react";
import { Link } from "react-router-dom";

const Category = ({ type }) => (
  <div className="box has-background-info" style={{ cursor: "pointer" }}>
    <div className="columns is-gapless is-flex is-vcentered is-centered has-text-white">
      <Link to={`/suggest/${type.url}`}>
      {/* Icon */}
      <div className="column is-one-fifth">
        <i className={type.icon} aria-hidden="true"></i>
      </div>
      {/* Title */}
      <div className="column has-text-white">
        <strong className="subtitle has-text-white">{type.name}</strong>
      </div>
      </Link>
    </div>
  </div>
);

export default Category;
