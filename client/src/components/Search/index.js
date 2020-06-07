import React, { useCallback, useEffect, useRef, useState } from "react";
import { averageRatings, formatDate } from "../../utils/helpers";
import { RecordType } from "../../utils/RecordType";
import Filter from "./components/Filter/Filter";
import Result from "./components/Result";
import SearchBar from "./components/SearchBar";

const Search = () => {
  const [filters, setFilters] = useState([]);
  const [data, setData] = useState([]);
  const fetchIdRef = useRef(0);

  const fetchData = useCallback(async ({ pageSize, pageIndex }) => {
    const fetchId = ++fetchIdRef.current;

    // Fetch Data
    const data = await fetch(
      `/api/v1/evidence?limit=${pageSize}&page=${pageIndex}&fields=status.state&filter=AVAILABLE`
    ).then((res) => res.json());

    if (fetchId === fetchIdRef.current) {
      setData(data.data);
    }
  }, []);

  useEffect(() => {
    fetchData(0, 10);
  }, [fetchData]);

  /* Adds a new Filter object */
  const addFilter = () => {
    setFilters((filters) => [...filters, { id: filters.length }]);
  };

  /* Updates Filters state with child component */
  const handleFilterUpdate = useCallback((f) => {
    setFilters((prevState) =>
      prevState.map((filter) => (filter.id === f.id ? { ...f } : filter))
    );
  }, []);

  /* Remove the selected Filter */
  const deleteItem = (id) => {
    /**
     * FIXME: ID duplication due to `id: filters.length` causes IDs not to be
     * unique. When deleting, it will delete multiple filters with the same ID.
     **/
    setFilters(filters.filter((filter) => filter.id !== id));
  };

  return (
    <>
      <section className="section">
        <div className="container">
          <h2 className="title">Browse</h2>
          <p className="subtitle" style={{ marginBottom: "50px" }}>
            Verify a claim by searching our curated repository.
          </p>
          <SearchBar />

          {/* Filters */}
          {filters.map((filter, index) => (
            <Filter
              key={index}
              id={index}
              remove={deleteItem}
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
