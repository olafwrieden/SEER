import React, { useState } from "react";
import { FiTrash } from "react-icons/fi";

const TYPE = {
  TEXT: [
    "Contains",
    "Does Not Contain",
    "Begins With",
    "Ends With",
    "Is Equal To",
  ],
  NUMERIC: [
    "Contains",
    "Does Not Contain",
    "Begins With",
    "Ends With",
    "Is Equal To",
    "Is Less Than",
    "Is Less Than or Equal To",
    "Is More Than",
    "Is More Than or Equal To",
  ],
};

const Fields = [
  {
    name: "Method",
    value: "method",
    type: TYPE.TEXT,
    values: [
      "TDD",
      "BDD",
      "Pair Programming",
      "Planning Poker",
      "Daily Standup Meetings",
      "Story Boards",
      "User Story Mapping",
      "Continuous Integration",
      "Retrospectives",
      "Burn-down Charts",
      "Requirements Prioritisation",
      "Version Control",
      "Code Sharing",
    ],
  },
  {
    name: "Methodology",
    value: "methodology",
    type: TYPE.TEXT,
    values: [
      "Agile",
      "Scrum",
      "Waterfall",
      "Spiral",
      "XP",
      "Rational Unified Process",
      "Crystal",
      "Clean Room",
      "Feature Driven Development",
      "Model Driven Development",
      "Domain Driven Development",
      "Formal Methods",
      "Problem Driven Development",
      "Cloud Computing",
      "Service Oriented Development",
      "Aspect Oriented Development",
      "Value Driven Development",
      "Product Driven Development",
    ],
  },
  {
    name: "Research Method",
    value: "research_method",
    type: TYPE.TEXT,
    values: [
      "Case Study",
      "Field Observation",
      "Experiement",
      "Interview",
      "Survey",
    ],
  },
  {
    name: "Research Participants",
    value: "research_participants",
    type: TYPE.TEXT,
    values: ["Undergraduates", "Postgraduates", "Practitioners"],
  },
];

const Filter = ({ remove }) => {
  const [fieldSelector, setFieldSelector] = useState(Fields[0]);

  const updateFieldSelector = (e) => {
    setFieldSelector(Fields.find((field) => field.value === e.target.value));
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
                <select onChange={(e) => updateFieldSelector(e)}>
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
            <select className="is-fullwidth">
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
          <select className="is-fullwidth">
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
            {/* <button className="column button is-primary is-fullwidth">
              <FiPlusCircle />
            </button> */}
            <button className="column button is-danger is-fullwidth">
              <FiTrash onClick={remove} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
