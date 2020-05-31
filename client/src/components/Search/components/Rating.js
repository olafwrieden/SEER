import React, { useState } from "react";
import StarRating from "./StarRating";
import "./StarRating.css";

const Rating = ({ isOpen, toggle }) => {
  const [starRating, setStarRating] = useState(0);
  const [comment, setComment] = useState("");

  // Validation Rules
  // const isCommentValid = comment.trim().length >= 20;
  // const isCommentRequired = reason === "other";
  // const isButtonDisabled =
  //   reason === "" || (isCommentRequired && !isCommentValid);

  // Reset on Back Button Click
  const handleBackButton = () => {
    setStarRating(0);
    setComment("");
    toggle();
  };

  return (
    <div className={`modal ${isOpen ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Submit a Review</p>
          <button
            className="delete"
            aria-label="close"
            onClick={handleBackButton}
          ></button>
        </header>

        <section className="modal-card-body">
          {/* Rejection Reason Selector*/}
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Rating</label>
                
                {/* Add Stars component */}
                <StarRating/>

                {/* <div className="buttons has-addons"> */}
                  {/* Show Rejection Reasons */}
                  {/* {Reasons.map((r) => (
                    <span
                      key={r.name}
                      className={`button ${
                        reason === r.name ? "is-primary" : ""
                      }`}
                      onClick={() => setReason(r.name)}
                    >
                      {r.button}
                    </span>
                  ))} */}
                {/* </div> */}
              </div>
            </div>
          </div>

          {/* Comment Field */}
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">
                  Review
                </label>
                <div className="control">
                  <input
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
                    className="input"
                    id="review"
                    name="review"
                    type="text"
                    placeholder="Add your personal review here..."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="modal-card-foot">
          <button className="button is-success">
            <span className="icon is-small">
              <i className="fas fa-check" 
              //onClick = {handlePostButton}
              aria-hidden="true"></i>
            </span>
            <span>Post</span>
          </button>
          <button className="button" onClick={handleBackButton}>
            <span className="icon is-small">
              <i className="fas fa-undo"></i>
            </span>
            <span>Back</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Rating;
