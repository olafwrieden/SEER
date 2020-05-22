import React from "react";
import { RecordType } from "../../../utils/RecordType";
import Category from "./Category";

const Categories = () => (
  <>
    <h2 className="subtitle has-text-centered">I am suggesting a...</h2>
    <div className="columns is-multiline has-text-centered is-center">
      <div className="column is-4-tablet is-4-desktop">
        <Category type={RecordType.BOOK} />
      </div>
      <div className="column is-4-tablet is-4-desktop">
        <Category type={RecordType.JOURNAL} />
      </div>
      <div className="column is-4-tablet is-4-desktop">
        <Category type={RecordType.WEBSITE} />
      </div>
    </div>
    <div className="columns is-multiline has-text-centered is-center">
      <div className="column is-4-tablet is-4-desktop">
        <Category type={RecordType.PROCEEDINGS} />
      </div>
      <div className="column is-4-tablet is-4-desktop">
        <Category type={RecordType.PERIODICAL} />
      </div>
      <div className="column is-4-tablet is-4-desktop">
        <Category type={RecordType.UNCLASSIFIED} />
      </div>
    </div>
  </>
);

export default Categories;
