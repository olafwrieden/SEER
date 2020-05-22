import React from "react";
import { FiCheck, FiTrash2 } from "react-icons/fi";
import { RecordType } from "../../../utils/RecordType";

const Entry = ({ title, type, date, doi, url }) => {
  const icon = type?.icon || RecordType.UNCLASSIFIED.icon;

  return (
    <div className="box">
      <div className="columns">
        {/* Icon */}
        <div className="column is-2">
          <div className="columns is-multiline">
            <div className="column is-12-desktop">
              <i className={`${icon} has-text-primary`} aria-hidden="true"></i>
            </div>
            <div className="column is-12-desktop">
              <div>{type.name}</div>
              <span className="tag is-light">{date}</span>
            </div>
          </div>
        </div>

        {/* Submission Info */}
        <div className="column">
          <p>
            <strong>{title}</strong>
          </p>

          {/* Tags */}
          <div
            className="field is-grouped is-grouped-multiline"
            style={{ marginTop: "10px" }}
          >
            {/* DOI */}
            <div className="control">
              <div className="tags has-addons">
                <span className="tag is-primary">DOI</span>
                <span className="tag is-light">{doi}</span>
              </div>
            </div>

            {/* URL */}
            <div className="control">
              <div className="tags has-addons">
                <span className="tag is-primary">URL</span>
                <span className="tag is-light">
                  <a
                    href={url}
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    View Page
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="column is-3">
          <div className="buttons has-addons is-centered">
            <div
              className="columns is-mobile is-multiline is-gapless is-pulled-right"
              style={{ width: "100%" }}
            >
              <button className="column button is-success is-light is-fullwidth is-8-desktop">
                <span className="icon">
                  <FiCheck />
                </span>
                <span>Accept</span>
              </button>
              <button className="column button is-danger is-light is-fullwidth is-4-desktop">
                <span className="icon">
                  <FiTrash2 />
                </span>
                <span className="is-hidden-desktop">Reject</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entry;
