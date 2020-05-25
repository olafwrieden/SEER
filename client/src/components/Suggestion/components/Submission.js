import React from "react";
import { useParams } from "react-router-dom";
//import { BookSchema } from "../../../../../api/app/models/Book"; 
//I dont know how to get BookSchema, so i made the temporary object as an example

const tempBookSchema = {
  title: {
    type: String,
    required: [true, 'A title is required.']
  },
  city: {
    type: String,
    required: [true, 'A city is required.']
  },
  publisher: {
    type: String,
    required: [true, 'A publisher is required.']
  },
  year: {
    type: Number,
    required: [true, 'A year is required.']
  },
  volume: {
    type: Number
  }
}

const Submission = () => {
  let { type } = useParams();
  let recordType = type.toLowerCase();
  return (
    <>
      <section className="section">
        <div className="container">
          <h2 className="subtitle">Suggest a new {recordType}</h2>
          <div className="columns is-multiline">
            <div className="column is-6-tablet is-6-desktop">
              <p>Somehow map over fields in evidence schema, for example...</p>
            </div>
            <div className="column is-6-tablet is-6-desktop">
              <form className="">
                {Object.keys(tempBookSchema).map((field, i) => (
                  <div className="field" key={i}>
                    <div className="control">
                      <input className="input" type="text" placeholder={field} />
                    </div>
                  </div>
                ))}
                <div className="field is-grouped">
                  <div className="control">
                    <button className="button is-link">Submit</button>
                  </div>
                  <div className="control">
                    <button className="button is-link is-light">Cancel</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Submission;