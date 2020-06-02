import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { RecordType } from "../../../utils/RecordType";
import { RiCheckLine, RiDeleteBin2Line } from "react-icons/ri";

const Submission = () => {
  const { type } = useParams();
  const icon = RecordType[type].icon || RecordType.UNCLASSIFIED.icon;
  const [message, setMessage] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(true);

  const isSubmitDisabled = () => {
    let condition = document.getElementById("doi").value.length === 0 || document.getElementById("evidence-link").value.length === 0;
    setDisableSubmit(condition);
  }

  const submitEvidence = () => {
    setMessage("Submitted!");
  }

  return (
    <>
      <section className="section">
        <div className="container">
          <h2 className="subtitle">Suggest a new {type.toLowerCase()}</h2>
          <div className="columns is-multiline">
            <div className="column is-6-tablet is-6-desktop">
              <i className={`${icon} has-text-primary`} aria-hidden="true"></i>
            </div>
            <div className="column is-6-tablet is-6-desktop">
              {/* <form> */}
              <div className="field">
                <div className="control">
                  <input id="doi" className="input" type="text" onKeyUp={isSubmitDisabled}
                    placeholder="DOI" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input id="evidence-link" className="input" type="text" onKeyUp={isSubmitDisabled}
                    placeholder="Link to evidence record" />
                </div>
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-success" disabled={disableSubmit} onClick={submitEvidence}>
                    <span className="icon is-small">
                      <RiCheckLine />
                    </span>
                    <span>Submit</span>
                  </button>
                </div>
                <div className="control">
                  <a className="button" href="./">
                    <span className="icon is-small">
                      <RiDeleteBin2Line />
                    </span>
                    <span>Cancel</span>
                  </a>
                </div>
              </div>
              {/* </form> */}
              {message && (
                <div className="notification is-success is-light">
                  {JSON.stringify(message)}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Submission;