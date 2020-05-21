import React from "react";
import CaughtUp from "../../utils/CaughtUp";
import { RecordType } from "../../utils/RecordType";
import Entry from "./components/Entry";

const entries = [
  {
    id: 1,
    name:
      "Emergence of plasmid-mediated colistin resistance mechanism MCR-1 in animals and human beings in China: a microbiological and molecular biological study",
    __type: "BOOK",
    date: "12 September 2020",
    author: "Barney, J. B., & Wright, P. M.",
  },
  {
    id: 2,
    name:
      "Understanding Market–Driving Behaviour: The Role of Entrepreneurship",
    __type: "JOURNAL",
    date: "2 July 2003",
    author: "Dunning, J. H.",
  },
  {
    id: 3,
    name: "Impact of Ownership on the International Involvement of SMEs.",
    __type: "JOURNAL",
    date: "30 January 1994",
    author: "Renko, M., El Tarabishy, A., Carsrud, A., & Brännback, M.",
  },
  {
    id: 4,
    name:
      "The Eclectic (OLI) Paradigm of International Production: Past, Present and Future.",
    __type: "WEBSITE",
    date: "9 March 2007",
    author: "Schindehutte, M., Morris, M. H., & Kocak, A.",
  },
];

const Moderation = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <h2 className="title">New Submissions</h2>
          <p className="subtitle">
            Help us improve the quality of SEER resources.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Display new entries for moderation */}
          {entries.map(({ id, name, __type, date, author }) => (
            <Entry
              key={id}
              title={name}
              type={RecordType[__type]}
              date={date}
              author={author}
            />
          ))}

          {/* Display "Caught Up" if moderation queue is empty */}
          {!entries.length && (
            <CaughtUp>
              Submissions requiring your approval will be shown here.
            </CaughtUp>
          )}
        </div>
      </section>
    </>
  );
};

export default Moderation;
