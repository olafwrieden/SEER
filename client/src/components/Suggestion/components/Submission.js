import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
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
  const [failed, setFailed] = useState("");
  // VALIDATE LINK
  const validateLink = (userInput) => {
    let regex = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if (regex == null) {
      setFailed("Please enter a valid link");
    } else {
      setFailed("");
      setLink(userInput); // if not valid, link var will not have length, so submit will not be enabled
    }
  }
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
                    onChange={(e) => validateLink(e.target.value)}
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
                  <Link className="button" to="./">
                    <span className="icon is-small">
                      <RiDeleteBin2Line />
                    </span>
                    <span>Cancel</span>
                  </Link>
                </div>
              </div>
              {/* </form> */}
              {message && (
                <div className="notification is-success is-light">
                  {JSON.stringify(message)}
                </div>
              )}
              {failed && (
                <div className="notification is-danger is-light">
                  {JSON.stringify(failed)}
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