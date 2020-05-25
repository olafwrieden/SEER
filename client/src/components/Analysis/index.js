import React from "react";
import CaughtUp from "../../utils/CaughtUp";
import ProgressChart from "../../utils/ProgressChart";
import { RecordType } from "../../utils/RecordType";
import Entry from "./components/Entry";

const entries = [
  {
    id: 1,
    name:
      "Emergence of plasmid-mediated colistin resistance mechanism MCR-1 in animals and human beings in China: a microbiological and molecular biological study",
    __type: "BOOK",
    date: "12/09/20",
    doi: "10.1037/a0028240",
    url: "https://www.google.com",
  },
  {
    id: 2,
    name:
      "Understanding Market–Driving Behaviour: The Role of Entrepreneurship",
    __type: "JOURNAL",
    date: "28/04/20",
    doi: "10.1037/a7728243",
    url: "https://www.google.com",
  },
  {
    id: 3,
    name: "Impact of Ownership on the International Involvement of SMEs.",
    __type: "JOURNAL",
    date: "21/02/20",
    doi: "10.1037/a0928247",
    url: "https://www.google.com",
  },
  {
    id: 4,
    name:
      "The Eclectic (OLI) Paradigm of International Production: Past, Present and Future.",
    __type: "WEBSITE",
    date: "17/02/20",
    doi: "10.1037/a0028301",
    url: "https://www.google.com",
  },
];

const Analysis = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <h2 className="title">Evidence Analysis</h2>
          <p className="subtitle">
            Help us ensure our data is accurate and reliable.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns">
            {/* Progress Chart */}
            <div className="column is-3-desktop is-4-tablet">
              <ProgressChart title="Analysis Queue" count={entries.length} />
            </div>

            <div className="column">
              {/* Display new entries for analysis */}
              {entries.map(({ id, name, __type, date, doi, url }) => (
                <Entry
                  key={id}
                  title={name}
                  type={RecordType[__type]}
                  date={date}
                  doi={doi}
                  url={url}
                />
              ))}

              {/* Display "Caught Up" if analysis queue is empty */}
              {!entries.length && (
                <CaughtUp>
                  Submissions requiring your analysis will be shown here.
                </CaughtUp>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Analysis;
