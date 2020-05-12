import React from "react";
import { RecordType } from "../../../utils/RecordType";
import Category from "./Category";

const Categories = () => (
  <div className="columns has-text-centered">
    <div className="column">
      <Category type={RecordType.BOOK} />
    </div>
    <div className="column">
      <Category type={RecordType.ARTICLE} />
    </div>
    <div className="column">
      <Category type={RecordType.WEBSITE} />
    </div>
  </div>
);

export default Categories;
