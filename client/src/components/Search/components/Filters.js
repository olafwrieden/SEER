import React from "react";
import { FiPlusCircle, FiTrash } from "react-icons/fi";


const Filters = () => {
    
    return (
        <form> 
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
                                <select>
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
                        <select>
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
                    <select>
                        <option value="tdd">TDD</option>
                        <option value="agile">Agile</option>
                        <option value="waterfall">Waterfall</option>
                    </select>
                </div>
            </div>
            {/* Action Buttons */}
            <div className="column is-2">
                <div className="buttons has-addons is-centered">
                    <button className="button is-success">
                        <FiPlusCircle />
                    </button>
                    <button className="button is-danger"
                    //onClick = {this.setState(this.baseState)}
                    >                       
                        <FiTrash />
                    </button>
                </div>
            </div>
{/* <----------------------------Test Buttons-----------------------------------------------------------------------------> */}
          
            {/* <>

          <div className="columns is-multiline box is-desktop is-paddingless">

            <div className="column is-2-desktop is-12-tablet is-12-mobile is-paddingless">
              <button className="Test"
              
              >
                Test
          </button>         
            </div>
          </div>
          
        </> */}
{/* <-----------------------------------------------------------------------------------------------------------> */}
        </div>
        </form> 
    );
};
export default Filters;