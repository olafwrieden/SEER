import React, { useState } from "react";
import { FaPaperPlane, FaUndoAlt } from "react-icons/fa";
import StarRating from "./StarRating";

const Rating = ({ id, isOpen, toggle }) => {
  const [stars, setStars] = useState(0);
  const [comment, setComment] = useState("");
  const isValidReview = stars >= 1 && stars <= 5 && comment.trim().length > 20;

  // Reset on Back Button Click
  const handleBackButton = () => {
    setStars(0);
    setComment("");
    toggle();
  };

  // Post Review
  const handlePostButton = async () => {
    return await fetch(`/api/v1/evidence/${id}/reviews`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ stars, comment }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.error) {
          handleBackButton();
        }
        return res;
      })
      .catch((error) => error);
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
          {/* Star Rating */}
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">My Rating</label>
                <StarRating stars={stars} setStars={setStars} />
              </div>
            </div>
          </div>

          {/* Comment Field */}
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Review</label>
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
          <button
            className="button is-success"
            disabled={!isValidReview}
            onClick={handlePostButton}
          >
            <span className="icon is-small">
              <FaPaperPlane />
            </span>
            <span>Submit</span>
          </button>

          {/* Back button */}
          <button className="button" onClick={handleBackButton}>
            <span className="icon is-small">
              <FaUndoAlt />
            </span>
            <span>Cancel</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Rating;
