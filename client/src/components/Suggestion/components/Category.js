import React from "react";
import { Link } from "react-router-dom";

const Category = ({ type }) => (
  <div className="box has-background-info" style={{ cursor: "pointer" }}>
    <Link to={`/suggest/${type.url}`} className="columns is-gapless is-flex is-vcentered is-centered has-text-white" >
      {/* Icon */}
      <div className="column is-one-fifth">
        <i className={type.icon} aria-hidden="true"></i>
      </div>
      {/* Title */}
      <div className="column">
        <strong className="subtitle has-text-white">{type.name}</strong>
      </div>
    </Link>
  </div>
);

export default Category;
