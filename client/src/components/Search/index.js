import React from "react";
import CaughtUp from "../../utils/CaughtUp";
import { RecordType } from "../../utils/RecordType";
import Result from "./components/Result";
import SearchBar from "./components/SearchBar";

const searchResults = [
  {
    id: 1,
    name:
      "The effects of test driven development on internal quality, external quality and productivity: A systematic review",
    type: RecordType.BOOK,
    date: "June 2016",
    author: "Wilson, B., Adolfo, N. S. S. G., & Emer, P. F. C. M.",
    descriptor:
      "Analyzed the conclusions of previously published articles on the effects of TDD on internal and external software quality and productivity, comparing TDD with Test Last Development (TLD).",
  },
  {
    id: 2,
    name: "Test-Driven Development – What is it and how do you use it?",
    type: RecordType.ARTICLE,
    date: "11 April 2017",
    author: "Powell-Morse, A.",
    descriptor:
      "Explore the fundamental components of test-driven development, including the basic test-driven development life cycle, some best practices, and potential advantages and disadvantages to implemented test-driven development in your own projects.",
  },
  {
    id: 3,
    name: "Test Driven Development: what it is, and what it is not.",
    type: RecordType.UNCLASSIFIED,
    date: "2 July 2018",
    author: "Koutifaris, A.",
    descriptor:
      "Fundamentals of Test Driven Development, addressing common misconceptions about the TDD technique. ",
  },
  {
    id: 4,
    name: "Test-Driven Development: Really, It’s a Design Technique.",
    type: RecordType.WEBSITE,
    date: "10 May 2019",
    author: "Taman, M., & Bryant, D.",
    descriptor:
      "Test-driven development (TDD) is an established technique for delivering better software, more rapidly, and more sustainably over time.",
  },
];

const Search = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <h2 className="title">Browse</h2>
          <p className="subtitle" style={{ marginBottom: "50px" }}>
            Verify a claim by searching our curated repository.
          </p>
          <SearchBar />
          <section className="section">
            {/* <div className="container"> */}
            {searchResults.map(
              ({ id, name, type, date, author, descriptor }) => (
                <Result
                  key={id}
                  title={name}
                  type={type}
                  date={date}
                  author={author}
                  descriptor={descriptor}
                />
              )
            )}

            {!searchResults.length && (
              <CaughtUp>Results from your search will be shown here.</CaughtUp>
            )}
          </section>
        </div>
      </section>
    </>
  );
};

export default Search;
