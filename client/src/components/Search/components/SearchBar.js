import React, {Component}  from "react";
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


class SearchBar extends Component
{
   constructor (props)
   {
       super(props);
       this.state = {
           startDate : null, endDate : null

       }
   }
   resetForm = () => {
    this.setState(this.baseState)
  }

   render()
   {
        
        return(<div className = "search_Bar">
                <>
      {/* Search Terms */}
      <div className="columns is-multiline box is-desktop is-paddingless">
        <div className="column is-6-desktop is-12-tablet split-border">
          <label className="label search-label">Search Terms</label>
          <input
            id="Description"
            className="input search-input"
            placeholder="TDD + Waterfall + Productivity"
            type="text"
          />
        </div>

        {/* Year From */}
        <div className="column is-6-desktop is-12-tablet split-border">
        <label class="label">Date Range From </label>  
        <DateRangePicker
                //style = {{width: 1000}}
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        />
        </div>

      </div>
    </>
        <form>     
        <>
      {/* Search Terms */}
      <div className="columns is-multiline box is-desktop is-paddingless">
      <label class="label">IF: </label>
      <div class="select">
                <select>
                    <option>Name of Field</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                    <option>Option 5</option>
                    <option>Option 6</option>
                </select>
        </div>

        {/* Year From */}
        <div class="select">
                <select>
                    <option>Operator</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                    <option>Option 5</option>
                    <option>Option 6</option>
                </select>
        </div>

        {/* Year To */}
        <div class="select">
                <select>
                <option>Value</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                    <option>Option 5</option>
                    <option>Option 6</option>
                </select>
        </div>

        {/* Search Button */}
        <div className="column is-2-desktop is-12-tablet is-12-mobile is-paddingless">
          <button className="Add Button">
            +
          </button>
          <button className="Reset Button">
            -
          </button>
        </div>
      </div>
    </>

    <>
      {/* Search Terms */}
      <div className="columns is-multiline box is-desktop is-paddingless">
        {/* Search Button */}
        <div className="column is-2-desktop is-12-tablet is-12-mobile is-paddingless">
          <button className="Run Search Button">
            Run Search
          </button>
          <button className="Save Search Button">
            Save Search
          </button>
          <button className="Cancel Button">
            Cancel
          </button>
        </div>
      </div>
    </>
        </form>
        
         </div>);
   }
}    


export default SearchBar;
