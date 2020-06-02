import React, { useState } from "react";
import { FiBookOpen } from "react-icons/fi";
import { RiCheckLine, RiDeleteBin2Line } from "react-icons/ri";
import { formatDate } from "../../../utils/helpers";

const Editor = ({ title, setTitle, date, setDate, url, setURL,authors, setAuthor,doi, setDOI, isOpen, toggle, edit }) => {
  const handleSave = () => {
    // console.log({title, resourceData, author, publishedDate, searchTerms});
    
  }

  return (
    <div className={`modal ${isOpen ? "is-active" : "ƒ"}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        {/* Modal Header */}
        <header className="modal-card-head has-background-white">
          <p
            className="modal-card-title"
            style={{ display: "flex", alignItems: "center" }}
          >
            <FiBookOpen /> <span style={{ paddingLeft: "10px" }}>Resource Editor</span>
          </p>
          <button
            className="delete"
            aria-label="close"
            onClick={() => toggle()}
          ></button>
        </header>

        {/* Modal Body */}
        <section className="modal-card-body">
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Resource Title</label>
                <div className="control">
                  <input
                    className="input"
                    id="resourceTitle"
                    name="resourceTitle"
                    type="text"
                    value = {title}
                    placeholder="Test Driven Development"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Author/s</label>
                <div className="control">
                  <input
                    className="input"
                    id="authors"
                    name="authors"
                    type="text"
                    //value={formatAuthor(authors)}
                    placeholder="Alex Burnardzic"
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Publication Date</label>
                <div className="control">
                  <input
                    className="input"
                    id="publishedDate"
                    name="publishedDate"
                    type="text"
                    value={formatDate(date)}
                    placeholder="14/05/99"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">DOI</label>
                <div className="control">
                  <input
                    className="input"
                    id="publishedDate"
                    name="publishedDate"
                    type="text"
                    value={doi}
                    placeholder="10.1037/a0028240"
                    onChange={(e) => setDOI(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Take in the search terms by a symbol then split and store */}
          <div className="columns"> 
            <div className="column">
              <div className="field">
                <label className="label">Search Terms</label>
                <div className="control">
                  <input
                    className="input"
                    id="searchTerms"
                    name="searchTerms"
                    type="text"
                    //value={searchTerms}
                    placeholder="TDD + Agile "
                    //onChange={(e) => setSearchTerms(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="columns"> 
            <div className="column">
              <div className="field">
                <label className="label">Resource Link</label>
                <div className="control">
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                  {url}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
            <div className="column">
              <div className="field">
                <label className="label">Resource Extract</label>
                <div className="control">
                <textarea class="textarea" placeholder="e.g. Resource Information Data" 
                //value={resourceData}
                //onChange={(e) => setResourceData(e.target.value)}
                > 
                </textarea>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* Modal Footer */}
        <footer className="modal-card-foot has-background-white">
          <button className="button is-success" onClick={() => edit()}>
            <span className="icon is-small">
              <RiCheckLine />
            </span>
            <span>Save</span>
          </button>
          <button className="button" onClick={() => toggle()}>
            <span className="icon is-small">
              <RiDeleteBin2Line />
            </span>
            <span>Cancel</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Editor;