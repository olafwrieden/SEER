import React from "react";

const SearchButtons = () => {
    return (
          <>
          {/* Search Terms */}
          
          <div className="columns is-multiline box is-desktop is-paddingless is-vcentered" 
          style={{ marginTop: "20px" }}>
            
            {/* Run Search Button */}
            <div className="column is-2 is-3-desktop is-12-tablet is-12-mobile is-paddingless">
              
              <button className="Run-Search-Button button is-primary is-snall search-btn ">
                Run Search
          </button>
              {/* Save Search Button */}
              <button className="Save-Search-Button button is-secondary is-snall search-btn">
                Save Search
          </button>
              {/* Cancel Search Button */}
              <button className="Cancel-Search-Button button is-Secondary is-snall search-btn">
                Cancel
          </button>
            </div>
          </div>
        </>  
    );
};

    export default SearchButtons;