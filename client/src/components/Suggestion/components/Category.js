import React from "react";
import { Link } from "react-router-dom";

const Category = ({ type }) => (
  <div className="box has-background-info" style={{ cursor: "pointer" }}>
    <div className="columns is-gapless is-flex is-vcentered is-centered has-text-white">
      {/* Icon */}
      <div className="column is-one-fifth">
      <Link to={`/suggest/${type.url}`} className="has-text-white">
        <i className={type.icon} aria-hidden="true"></i>
        </Link>
      </div>
      {/* Title */}
      <div className="column has-text-white">
      <Link to={`/suggest/${type.url}`}>
        <strong className="subtitle has-text-white">{type.name}</strong>
        </Link>
      </div>
    </div>
  </div>
);

export default Category;
