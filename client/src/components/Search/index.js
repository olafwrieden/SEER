import React, { useCallback, useEffect, useRef, useState } from "react";
import { averageRatings, formatDate } from "../../utils/helpers";
import { RecordType } from "../../utils/RecordType";
import Filter from "./components/Filter/Filter";
import Result from "./components/Result";
import SearchBar from "./components/SearchBar";
import { v4 } from "uuid";

const Search = () => {
  const [textSearch, setTextSearch] = useState("");
  const [filters, setFilters] = useState([]);
  const [data, setData] = useState([]);
  const fetchIdRef = useRef(0);

  const fetchData = useCallback(
    async ({ pageSize, pageIndex }) => {
      const fetchId = ++fetchIdRef.current;

      // Fetch Data
      const data = await fetch(
        `/api/v1/evidence?limit=${pageSize}&page=${pageIndex}&fields=status.state&filter=AVAILABLE&filters=${JSON.stringify(
          filters
        )}&q=${textSearch}`
      ).then((res) => res.json());

      if (fetchId === fetchIdRef.current) {
        setData(data.data);
      }
    },
    [filters, textSearch]
  );

  useEffect(() => {
    fetchData(0, 10);
  }, [fetchData]);

  /* Adds a new Filter object */
  const addFilter = () => {
    setFilters((filters) => [...filters, { id: v4() }]);
  };

  /* Updates Filters state with child component */
  const handleFilterUpdate = useCallback((f) => {
    setFilters((prevState) =>
      prevState.map((filter) => (filter.id === f.id ? { ...f } : filter))
    );
  }, []);

  /* Remove the selected Filter */
  const deleteItem = (i) => {
    setFilters(
      ...[filters.slice(0, i).concat(filters.slice(i + 1, filters.length))]
    );
  };

  return (
    <>
      <section className="section">
        <div className="container">
          <h2 className="title">Browse</h2>
          <p className="subtitle" style={{ marginBottom: "50px" }}>
            Verify a claim by searching our curated repository.
          </p>
          <SearchBar setTextSearch={setTextSearch} />

          {/* Filters */}
          {filters.map((filter, index) => (
            <Filter
              key={index}
              id={filter.id}
              remove={() => deleteItem(index)}
              handleChange={handleFilterUpdate}
            />
          ))}
          {/* Add Filters */}
          <button
            className="button is-small is-primary is-outlined"
            onClick={() => addFilter()}
          >
            Add Filter
          </button>
        </div>
      </section>

      {/* Search Results */}
      <div className="container">
        {data.map((result) => {
          const date = formatDate(result?.day, result?.month, result?.year);
          const stars = averageRatings(result.ratings);

          return (
            <Result
              key={result.id}
              id={result.id}
              title={result.title}
              type={RecordType[result.__type]}
              date={date}
              authors={result.authors}
              researchQuestion={result.research_question}
              outcome={result.outcome}
              rating={stars}
              seMethod={result.se_method}
            />
          );
        })}

        {!data.length && (
          <p className="has-text-centered">
            Your search results will appear here.
          </p>
        )}
      </div>
    </>
  );
};

export default Search;
