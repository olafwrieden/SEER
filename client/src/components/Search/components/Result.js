import React from "react";
import { AiFillStar } from "react-icons/ai";

const Result = ({
  title,
  type,
  date,
  authors,
  researchQuestion,
  outcome,
  rating,
  seMethod,
}) => {
  return (
    <div className="box">
      <div className="columns">
        {/* Icon */}
        <div className="column is-one-fifth">
          <i className={`${type.icon} has-text-primary`} aria-hidden="true"></i>
        </div>

        {/* Title & Author Info */}
        <div className="column">
          <div className="columns">
            <div className="column">
              <p>
                <strong>{title}</strong>
              </p>
              <br />
              <div className="tags">
                {authors.map((author, i) => (
                  <span key={i} className="tag">
                    {author}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="columns">
        {/* Type, Date, Rating */}
        <div className="column is-one-fifth">
          {type.name}
          <br />
          {date}
          <br />
          <div>
            <span className="icons has-text-warning">
              {[...Array(rating)].map((_, i) => (
                <AiFillStar key={i} />
              ))}
            </span>
          </div>
        </div>

        {/* Research Question & Outcome */}
        <div className="column">
          <p>
            <strong>Question:</strong> {researchQuestion}
          </p>
          <p>
            <strong>Outcome:</strong> {outcome}
          </p>
        </div>

        {/* SE Method */}
        <div className="column is-one-fifth">
          <div className="tags">
            {seMethod.map((method, i) => (
              <span key={i} className="tag">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
