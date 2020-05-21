// import React from "react";
// import { RecordType } from "../../utils/RecordType";
// import Result from "./components/Result";
// import SearchBar from "./components/SearchBar";
import Search from './components/Search';
// const searchResults = [
//   {
//     id: 1,
//     name:
//       "The effects of test driven development on internal quality, external quality and productivity: A systematic review",
//     type: RecordType.BOOK,
//     date: "June 2016",
//     authors: ["Wilson, B.", "Adolfo, N. S. S. G.", "Emer, P. F. C. M."],
//     se_method: ["TDD", "Waterfall"],
//     keywords: ["TDD", "Effects"],
//     research_question:
//       "The effects of test driven development on internal quality, external quality and productivity: A systematic review",
//     outcome: "It was shown to be false.",
//     descriptor:
//       "Analyzed the conclusions of previously published articles on the effects of TDD on internal and external software quality and productivity, comparing TDD with Test Last Development (TLD).",
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: "Test-Driven Development – What is it and how do you use it?",
//     type: RecordType.ARTICLE,
//     date: "11 April 2017",
//     authors: ["Powell-Morse, A."],
//     se_method: ["Agile", "TDD"],
//     keywords: ["TDD", "Effects"],
//     research_question:
//       "The effects of test driven development on internal quality, external quality and productivity: A systematic review",
//     outcome: "It was shown to be false.",
//     descriptor:
//       "Explore the fundamental components of test-driven development, including the basic test-driven development life cycle, some best practices, and potential advantages and disadvantages to implemented test-driven development in your own projects.",
//     rating: 4,
//   },
//   {
//     id: 3,
//     name: "Test Driven Development: what it is, and what it is not.",
//     type: RecordType.UNCLASSIFIED,
//     date: "2 July 2018",
//     authors: ["Koutifaris, A."],
//     se_method: ["TDD", "Waterfall"],
//     keywords: ["TDD", "Effects"],
//     research_question:
//       "The effects of test driven development on internal quality, external quality and productivity: A systematic review",
//     outcome: "It was shown to be false.",
//     descriptor:
//       "Fundamentals of Test Driven Development, addressing common misconceptions about the TDD technique. ",
//     rating: 2,
//   },
//   {
//     id: 4,
//     name: "Test-Driven Development: Really, It’s a Design Technique.",
//     type: RecordType.WEBSITE,
//     date: "10 May 2019",
//     authors: ["Taman, M.", "Bryant, D."],
//     se_method: ["TDD", "Waterfall"],
//     keywords: ["TDD", "Effects"],
//     research_question:
//       "The effects of test driven development on internal quality, external quality and productivity: A systematic review",
//     outcome: "It was shown to be false.",
//     descriptor:
//       "Test-driven development (TDD) is an established technique for delivering better software, more rapidly, and more sustainably over time.",
//     rating: 5,
//   },
// ];

// const Search = () => {
//   return (
//     <>
//       <section className="section">
//         <div className="container">
//           <h2 className="title">Browse</h2>
//           <p className="subtitle" style={{ marginBottom: "50px" }}>
//             Verify a claim by searching our curated repository.
//           </p>
//           <SearchBar />
//         </div>
//       </section>

//       {/* Search Results */}
//       <section className="section">
//         <div className="container">
//           {searchResults.map((result) => (
//             <Result
//               key={result.id}
//               title={result.name}
//               type={result.type}
//               date={result.date}
//               authors={result.authors}
//               researchQuestion={result.research_question}
//               outcome={result.outcome}
//               rating={result.rating}
//               seMethod={result.se_method}
//             />
//           ))}

//           {!searchResults.length && (
//             <p className="has-text-centered">
//               Your search results will appear here.
//             </p>
//           )}
//         </div>
//       </section>
//     </>
//   );
// };

export default Search;
