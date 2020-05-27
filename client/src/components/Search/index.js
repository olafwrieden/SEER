import React, {useState} from "react";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import SearchButtons from "./components/SearchButtons";


const Search = () => {

  const [filters, setFilters] = useState([{method: "defaultMethod", operator: "has", value: "something"}]);
  
  const addFilter = (v1,v2,v3) => {

    // TODO: extract the text from values

    setFilters(filters => [...filters, {method: Filters.method, operator: "Contains", value: "TDD"}])
    console.log("User wants to add another filter");
    console.log(filters);
    
  }

  const removeFilter = (index) => {
    console.log(`User wants to remove a filter at index ${index}`);
    const array = [...filters];
    array.splice(index,1);
    console.log(array, "array after slice")
    setFilters(array)
    console.log(filters);
  }

  return (
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
            {
              filters.map((_, index) => <Filters key={index} add={addFilter} remove={() => removeFilter(index) } />)
            }
            
            <SearchButtons/>
        </div>
      </section>
    </>
  )};

export default Search;
