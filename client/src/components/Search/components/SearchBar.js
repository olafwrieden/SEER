import React from "react";
import "./SearchBar.css";

const SearchBar = ({ setTextSearch }) => {
  return (
    <>
      {/* Search Terms */}
      <div className="columns is-multiline box is-desktop is-paddingless">
        <div className="column is-6-desktop is-12-tablet split-border">
          <label className="label search-label">Search Terms</label>
          <input
            id="descrinpution"
            className="input search-input"
            placeholder="TDD + Waterfall + Productivity"
            type="text"
            onChange={(e) => setTextSearch(encodeURIComponent(e.target.value))}
          />
        </div>

        {/* Year From */}
        <div className="column is-2-desktop is-12-tablet split-border">
          <label className="label search-label">From</label>
          <input
            id="fromYear"
            className="input search-input"
            placeholder="Any Year"
            type="number"
            pattern="^\d{4}$"
            min={1000}
            max={9999}
          />
        </div>

        {/* Year To */}
        <div className="column is-2-desktop is-12-tablet split-border">
          <label className="label search-label">To</label>
          <input
            id="toYear"
            className="input search-input"
            placeholder="Any Year"
            type="number"
            pattern="^\d{4}$"
            min={1000}
            max={9999}
          />
        </div>

        {/* Search Button */}
        <div className="column is-2-desktop is-12-tablet is-12-mobile is-paddingless">
          <button className="button is-primary is-large search-btn">
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
