import React, { useState } from "react";

/* Selectable Rejection Reasons */
const Reasons = [
  { name: "duplicate", button: "Duplicate" },
  { name: "unrelated", button: "Unrelated to SE" },
  { name: "other", button: "Other" },
];

const RejectionNotice = ({ isOpen, toggle }) => {
  // Rejection State
  const [reason, setReason] = useState("");
  const [comment, setComment] = useState("");

  // Validation Rules
  const isCommentValid = comment.trim().length >= 20;
  const isCommentRequired = reason === "other";
  const isButtonDisabled =
    reason === "" || (isCommentRequired && !isCommentValid);

  // Reset on Back Button Click
  const handleBackButton = () => {
    setReason("");
    setComment("");
    toggle();
  };

  return (
    <div className={`modal ${isOpen ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Reject Submission</p>
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
                <label className="label">Why is it being rejected?</label>
                <div className="buttons has-addons">
                  {/* Show Rejection Reasons */}
                  {Reasons.map((r) => (
                    <span
                      key={r.name}
                      className={`button ${
                        reason === r.name ? "is-primary" : ""
                      }`}
                      onClick={() => setReason(r.name)}
                    >
                      {r.button}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Rejection Comment Field */}
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">
                  {isCommentRequired ? "Reason" : "Optional Comment"}
                </label>
                <div className="control">
                  <input
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
                    className={`input ${
                      isCommentRequired && !isCommentValid ? "is-danger" : ""
                    }`}
                    id="rejectionReason"
                    name="rejectionReason"
                    type="text"
                    placeholder="This submission was rejected because..."
                  />
                  {isCommentRequired && !isCommentValid && (
                    <p class="help is-danger">
                      A reason is required (minimum 20 characters)
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="modal-card-foot">
          <button disabled={isButtonDisabled} className="button is-danger">
            <span className="icon is-small">
              <i className="fas fa-times" aria-hidden="true"></i>
            </span>
            <span>Reject</span>
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

export default RejectionNotice;
