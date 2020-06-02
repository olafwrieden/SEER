import React, {useState} from "react";
import { FiCheck, FiPenTool } from "react-icons/fi";
import { RecordType } from "../../../utils/RecordType";
import Editor from "./Editor";

const Entry = ({ id, title, type, authors, date, doi, url }) => {
  const icon = type?.icon || RecordType.UNCLASSIFIED.icon;
  const [showEditor, setShowEditor] = useState(false);
  const toggleEditor = () => setShowEditor(!showEditor);
  const [tempTitle, setTempTitle] = useState(title || "");
  //const [resourceData, setResourceData] = useState("");
  const [author, setAuthors] = useState(authors || "");
  const [urlLink, seturlLink] = useState(url|| "");
  const [publishedDate, setPublishedDate] = useState(date || "");
  const [resourceDOI, setResourceDOI] = useState(doi|| "");
  //const [searchTerms, setSearchTerms] = useState("");

  const updateDetails = () => {
    //TODO: ADD Logic
    console.log('user wants to update evidence ' + id);
    


  }

  return (
  <>
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
                    rel="noopener noreferrer"
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
              <button className="column button is-success is-light is-fullwidth is-6-desktop">
                <span className="icon">
                  <FiCheck />
                </span>
                <span>Accept</span>
              </button>
              <button className="column button is-success is-light is-fullwidth is-6-desktop" onClick={() => toggleEditor()}>
                <span className="icon">
                  <FiPenTool />
                </span>
                <span>Edit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Editor title={tempTitle} 
    setTitle={setTempTitle} 
    date={publishedDate} 
    setDate={setPublishedDate} 
    url={urlLink}
    setURL={seturlLink}
    doi={resourceDOI}
    setDOI={setResourceDOI}
    isOpen={showEditor} 
    authors={author}
    setAuthor={setAuthors}
    toggle={toggleEditor} edit={() => updateDetails()} />
  </>
  );
};

export default Entry;
