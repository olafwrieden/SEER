import React from "react";
import SearchBar from "./components/SearchBar";

const Search = () => (
  <>
    <section className="section">
      <div className="container">
        <h2 className="title">New Search</h2>
        <p className="subtitle">Looking for a research article?</p>
      </div>
    </section>

    <section className="section">
      <div className="container is-vcentered">
          <SearchBar/>
      </div>
    </section>
  </>
);

export default Search;
