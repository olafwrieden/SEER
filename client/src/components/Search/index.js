import React from "react";
import SearchBar from "./components/SearchBar";

const Search = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Browse</h2>
        <p className="subtitle" style={{ marginBottom: "50px" }}>
          Verify a claim by searching our curated repository.
        </p>
        <SearchBar />
      </div>
    </section>
  );
};

export default Search;
