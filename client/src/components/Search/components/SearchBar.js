import React, { Component } from "react";
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

//const [method, setMethod] = useState({});

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null, endDate: null

    }
  }
  resetForm = () => {
    this.setState(this.baseState)
  }

  render() {

    return (<div className="search_Bar">
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

          {/* Date Picker */}
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
    </div>);
  }
}


export default SearchBar;
