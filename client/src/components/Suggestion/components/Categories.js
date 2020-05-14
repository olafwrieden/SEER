import React from "react";
import { RecordType } from "../../../utils/RecordType";
import Category from "./Category";

const Categories = () => (
  <div className="columns is-multiline has-text-centered is-center">
    <div className="column is-4-tablet is-4-desktop">
      <Category type={RecordType.BOOK} />
    </div>
    <div className="column is-4-tablet is-4-desktop">
      <Category type={RecordType.ARTICLE} />
    </div>
    <div className="column is-4-tablet is-4-desktop">
      <Category type={RecordType.WEBSITE} />
    </div>
  </div>
);

export default Categories;
