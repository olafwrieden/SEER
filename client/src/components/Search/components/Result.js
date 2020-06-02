import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { RecordType } from "../../../utils/RecordType";
import { useAuth } from "../../App/Authentication";
import Rating from "./Rating";
import "./SearchBar.css";

const Result = ({
  id,
  title,
  type,
  date,
  authors,
  researchQuestion,
  outcome,
  rating,
  seMethod,
}) => {
  const icon = type?.icon || RecordType.UNCLASSIFIED.icon;
  const { isAuthed } = useAuth();

  const [showRating, setShowRating] = useState(false);
  const toggleRatingSubmission = () => setShowRating(!showRating);

  return (
    <>
      <div className="box">
        <div className="columns">
          {/* Icon */}
          <div className="column is-one-fifth">
            <i className={`${icon} has-text-primary`} aria-hidden="true"></i>
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
                      {author.first_name} {author.middle_name} {author.last_name}
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
            <div className="columns is-multiline">
              <span className="column is-12 icons has-text-warning">
                {[...Array(rating)].map((_, i) => (
                  <AiFillStar key={i} />
                ))}
              </span>

              {isAuthed && (
                <span className="column is-12">
                  <button
                    className="button is-small is-outlined is-dark"
                    onClick={() => toggleRatingSubmission(id)}
                  >
                    Add Review
                  </button>
                </span>
              )}
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
      <Rating id={id} isOpen={showRating} toggle={toggleRatingSubmission} />
    </>
  );
};

export default Result;
