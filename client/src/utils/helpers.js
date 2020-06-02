import React from "react";

export const formatDate = (day, month, year) => {
  let output = "";
  if (day) output += `${day} `;
  if (month) output += `${month} `;
  if (year) output += `${year} `;
  return output.trim();
};

export const averageRatings = (ratings) => {
  return (
    Math.ceil(
      ratings.reduce((prev, curr) => prev + curr.stars, 0) / ratings.length
    ) || 0
  );
};

export const formatAuthor = (authors) => {
  // let output = ".";
  // if (authors.first_name) output += `${authors.first_name} `;
  // if (authors.middle_name) output += `${authors.middle_name} `;
  // if (authors.last_name) output += `${authors.last_name} `;
  // return output.trim();

  {authors.map((author, i) => (
    <span key={i} className="tag">
      {author.first_name} {author.middle_name} {author.last_name}
    </span>
  ))}
};
