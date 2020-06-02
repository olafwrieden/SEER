import React, { useEffect, useState } from "react";
import CaughtUp from "../../utils/CaughtUp";
import { formatDate } from "../../utils/helpers";
import ProgressChart from "../../utils/ProgressChart";
import { RecordType } from "../../utils/RecordType";
import Entry from "./components/Entry";

const Analysis = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch("/api/v1/evidence?fields=status.state&filter=PENDING_ANALYSIS")
      .then((res) => res.json())
      .then((res) => setEntries(res.data))
      .catch((error) => error);
  }, []);

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
              {entries.map(
                ({ id, title, __type, year, month, day, doi, url }) => (
                  <Entry
                    key={id}
                    id={id}
                    title={title}
                    type={RecordType[__type]}
                    date={formatDate(day, month, year)}
                    doi={doi}
                    url={url}
                  />
                )
              )}

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
