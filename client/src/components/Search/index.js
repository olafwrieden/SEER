import React from "react";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import SearchButtons from "./components/SearchButtons";

    
// state = {
//   new_component : [
//     <Filters/>
//   ], display_new_component : false

// }

// displayComponent = () => {
//   this.setState({
//     display_new_component: !this.state.display_new_component
//   })
// }


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
          <Filters/>
          <SearchButtons/>
      </div>
    </section>
  </>
);

export default Search;
