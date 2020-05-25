import React from "react";
import { useParams } from "react-router-dom";
import { RecordType } from "../../../utils/RecordType";

const Submission = () => {
  const { type } = useParams();
  const urlType = type.replace("%20", " ");
  const icon = RecordType[urlType].icon || RecordType.UNCLASSIFIED.icon;

  return (
    <>
      <section className="section">
        <div className="container">
          <h2 className="subtitle">Suggest a new {urlType.toLowerCase()}</h2>
          <div className="columns is-multiline">
            <div className="column is-6-tablet is-6-desktop">
              <i className={`${icon} has-text-primary`} aria-hidden="true"></i>
            </div>
            <div className="column is-6-tablet is-6-desktop">
              <form className="">
                <div className="field">
                  <div className="control">
                    <input className="input" type="text" required="required" placeholder="DOI" />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input className="input" type="text" required="required" placeholder="Link to evidence record" />
                  </div>
                </div>
                <div className="field is-grouped">
                  <div className="control">
                    <button className="button is-link">Submit</button>
                  </div>
                  <div className="control">
                    <button className="button is-link is-light">Cancel</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Submission;