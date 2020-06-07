import React, { useEffect, useState } from "react";
import { FiTrash } from "react-icons/fi";
import { Fields } from "./components/Fields";

const Filter = ({ id, remove, handleChange }) => {
  const [fieldSelector, setFieldSelector] = useState(Fields[0]);
  const [filter, setFilter] = useState({
    id,
    type: Fields[0].value,
    operator: Fields[0].type[0],
    value: Fields[0].values[0],
  });

  /* Call change handler when filter updates */
  useEffect(() => handleChange(filter), [filter, handleChange]);

  /* Update state after dynamically adding selection options */
  useEffect(() => {
    setFilter((prevState) => ({
      ...prevState,
      value: fieldSelector.values[0],
    }));
  }, [fieldSelector]);

  /* Change handler for field */
  const updateFieldSelector = (e) => {
    setFieldSelector(Fields.find((field) => field.value === e.target.value));
  };

  /* Change handler for operator & value */
  const handleUpdate = (e) => {
    e.persist();
    setFilter((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div
      className="columns box is-paddingless is-vcentered"
      style={{ marginTop: "10px" }}
    >
      <div className="column is-4">
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label has-text-centered">If</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="select is-fullwidth">
                <select name="type" onChange={(e) => updateFieldSelector(e)}>
                  {Fields.map((field) => (
                    <option key={field.name} value={field.value}>
                      {field.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="column is-3">
        <div className="field is-horizontal is-fullwidth">
          <div className="select is-fullwidth">
            <select
              name="operator"
              className="is-fullwidth"
              onChange={(e) => handleUpdate(e)}
            >
              {fieldSelector.type.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="column is-3">
        <div className="select is-fullwidth">
          <select
            name="value"
            className="is-fullwidth"
            onChange={(e) => handleUpdate(e)}
          >
            {fieldSelector.values.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="column is-2 is-12-mobile">
        <div className="buttons has-addons is-centered">
          <div
            className="columns is-mobile is-multiline"
            style={{ width: "100%" }}
          >
            <button
              className="column button is-danger is-fullwidth"
              onClick={() => remove()}
            >
              <FiTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
