import React, { useCallback, useEffect, useRef, useState } from "react";
import { averageRatings, formatDate } from "../../utils/helpers";
import { RecordType } from "../../utils/RecordType";
import Result from "./components/Result";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";

const Search = ({ terms, dateFrom, dateTo }) => {
  const [filters, setFilters] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const fetchIdRef = useRef(0);

  const fetchData = useCallback(async ({ pageSize, pageIndex }) => {
    const fetchId = ++fetchIdRef.current;
    setLoading(true);

    // Fetch Data
    const data = await fetch(
      `/api/v1/evidence?limit=${pageSize}&page=${pageIndex}`
    ).then((res) => res.json());

    if (fetchId === fetchIdRef.current) {
      setData(data.data);
      setTotalItems(data.totalItems);
      setPageCount(data.totalPages);
      setLoading(false);
    }
  }, []);

  const pageIndex = 0; // TODO: remove hardcoding
  const pageSize = 10; // TODO: remove hardcoding
  useEffect(() => {
    fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);

  const addFilter = (defautmethod, defaultOperator, defaultValue) => {
    defautmethod = "method";
    defaultOperator = "operator";
    defaultValue = "value";

    setFilters((filters) => [
      ...filters,
      { method: defautmethod, operator: defaultOperator, value: defaultValue },
    ]);
  };

  const removeFilter = (e, index) => {
    e.preventDefault();
    setFilters([...filters.filter((_, filterIndex) => filterIndex !== index)]);
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
          {filters.map((_, index) => (
            <Filter key={index} remove={(e) => removeFilter(e, index)} />
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
