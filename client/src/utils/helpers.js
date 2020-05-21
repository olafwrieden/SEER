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
