/**
 * Types of records supported by SEER.
 */
export const RecordType = {
  BOOK: { name: "Book", url: "BOOK", icon: "fa fa-book fa-3x" },
  BOOKSECTION: { name: "Book Section", url: "BOOKSECTION", icon: "fas fa-book-open fa-3x" },
  JOURNAL: { name: "Article (Journal)", url: "JOURNAL", icon: "far fa-file fa-3x" },
  PERIODICAL: { name: "Article (Periodical)", url: "PERIODICAL", icon: "far fa-file fa-3x" },
  WEBSITE: { name: "Website", url: "WEBSITE", icon: "fa fa-globe fa-3x" },
  PROCEEDINGS: { name: "Proceedings", url: "PROCEEDINGS", icon: "fas fa-user-friends fa-3x" },
  UNCLASSIFIED: {
    name: "Unclassified",
    url: "UNCLASSIFIED",
    icon: "far fa-question-circle fa-3x",
  },
};
