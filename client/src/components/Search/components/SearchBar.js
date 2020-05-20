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
        <form>
        <label class="label">Description</label>   
        
        <input class="input" type="text" placeholder="Article Description" style = {{width: 500}}></input>
        
        <label class="label">Date Range From </label>  
        <DateRangePicker
                style = {{width: 500}}
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        />

        <label class="label">IF:</label>
        <div class="select">
                <select>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                    <option>Option 5</option>
                    <option>Option 6</option>
                </select>
        </div>
        <div class="select">
                <select>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                    <option>Option 5</option>
                    <option>Option 6</option>
                </select>
        </div>
        <div class="select">
                <select>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                    <option>Option 5</option>
                    <option>Option 6</option>
                </select>
        </div>
        <h3>Reset or Add Button </h3>
        <button
          onClick={this.resetForm}
          type="reset"> - </button>
        <button
          //onClick={this.addForm}
          type="button"> + </button>
          <h3>  </h3>
          <h3> ----- </h3>
        <button class="button is-link">Search</button>

        </form>
         </div>);
   }
}    


export default SearchBar;
