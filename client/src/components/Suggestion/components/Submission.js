import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RecordType } from "../../../utils/RecordType";
import { RiCheckLine, RiDeleteBin2Line } from "react-icons/ri";

const Submission = () => {
  // DISPLAY ICON
  const { type } = useParams();
  const icon = RecordType[type].icon || RecordType.UNCLASSIFIED.icon;
  // GET SUBMITTED INFO
  const [doi, setDoi] = useState("");
  const [link, setLink] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [message, setMessage] = useState("");
  // DISABLE/ENABLE SUBMIT BUTTON
  useEffect(() => {
    setDisableSubmit(doi.length < 5 || link.length < 5)
  }, [doi, link])

  const submitEvidence = () => {
    return fetch("/api/v1/evidence", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ doi, link }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res?.error && !res?.message) {
          setMessage("Submitted!");
        }
        return res;
      })
      .catch((error) => error);
  };

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
                  <input id="doi" className="input" type="text" placeholder="DOI"
                    onChange={(e) => setDoi(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input" type="text" placeholder="Link to evidence record"
                    onChange={(e) => setLink(e.target.value)}
                  />
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