import React from "react";
import { FiPlusCircle, FiTrash } from "react-icons/fi";


class Filters extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {selectValue: null 
        
            // ,defaultmethod : null
        };
    
        this.handleChange = this.handleChange.bind(this);
      }


    /* handleChange() function to set a new state for input */
    
    // handleChange = (defaultmethod) => {
    //     this.setState({ defaultmethod });
    //     console.log(`Option selected:`, props.defaultmethod);
    //   }

    handleChange = event => {
        this.setState({selectValue : event.target.value});
        console.log("Option selected:", this.state.selectValue);
    };


    render() {
        //const { defaultmethod } = this.state;
        return (
            
            <div
                className="columns box is-small is-paddingless is-vcentered"
                style={{ marginTop: "20px" }}

            >

                <div className="column is-2 ">
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">If</label>
                        </div>
                        <div className="field-body">
                            <div className="field">

                                <div className="select">
                                    <select defaultmethod={this.state.selectValue}
                                        onChange={this.handleChange}
                                    >

                                        <option value="method">Method</option>
                                        <option value="methodology">Methodology</option>

                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-2">
                    <div className="field is-horizontal">
                        <div className="select">
                            <select 
                                defaultOperator={this.state.selectValue}
                                onChange={this.handleChange} >
                                <option value="contains">Contains</option>
                                <option value="not_contains">Does Not Contain</option>
                                <option value="begins_with">Begins With</option>
                                <option value="ends_with">Ends With</option>
                                <option value="equal_to">Is Equal To</option>
                                <option value="less_than">Is Less Than</option>
                                <option value="less_than_or_equal">
                                    Is Less Than or Equal To
     </option>
                                <option value="more_than">Is More Than</option>
                                <option value="more_than_or_equal">
                                    Is More Than or Equal To
     </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="column is-2">
                    <div className="select">
                        <select defaultValue={this.state.selectValue}
                            onChange={this.handleChange} >
                            <option value="tdd">TDD</option>
                            <option value="agile">Agile</option>
                            <option value="waterfall">Waterfall</option>
                        </select>
                    </div>
                </div>
                {/* Action Buttons */}
                <div className="column is-2">
                    <div className="buttons has-addons is-centered">
                        <button className="button is-success"
                            // onClick = {this._showFilter.bind(null, true)}
                            onClick={this.props.add}
                            //onClick={this.props.add(varaible_1, varaible_2, defaultValue)}
                        >
                            <FiPlusCircle />
                        </button>
                        <button className="button is-danger"
                            onClick={this.props.remove}
                        // onClick = {this._showFilter.bind(null, false)}
                        >
                            <FiTrash />
                        </button>
                    </div>
                </div>
                <div>
                    {this.state.showFilter && <Filters />}
                </div>
            </div>
        )

    }
}

export default Filters;

