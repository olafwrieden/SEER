import React, { useState } from "react";
import StarRating from "./StarRating";
import "./StarRating.css";

const Rating = ({ isOpen, toggle, id }) => {
  const [starRating, setStarRating] = useState(0);
  const [comment, setComment] = useState("");


  // Reset on Back Button Click
  const handleBackButton = () => {
    setStarRating(0);
    setComment("");
    toggle();
  };

  const handlePostButton = () => {
    return fetch(`/api/v1/evidence/${id}/reviews`, {
      method : "POST",
      headers: { "Content-type": "application/json"},
      body: JSON.stringify({ stars: starRating, comment }),
    })
    .then((res) => res.json())
    .then((res) => {
      if (!res?.error && !res?.comment) {
        handleBackButton()      
      }
      return res;
    })
    .catch((error) => error);
  }

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

          {/* StarRating */}
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Rating</label>
                
                {/* Adds Stars component */}
                <StarRating starRating = {starRating} setStarRating={setStarRating} />

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

        {/* Post Button */}
        <footer className="modal-card-foot">
          <button className="button is-success" onClick = {handlePostButton}>
            <span className="icon is-small">
              <i className="fas fa-check"             
              aria-hidden="true"></i>
            </span>
            <span>Post</span>
          </button>

          {/* Back button */}
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
