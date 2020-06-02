import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const StarRating = ({ stars, setStars }) => {
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;

        return (
          <AiFillStar
            key={i}
            style={{ cursor: "pointer" }}
            color={ratingValue <= (hover || stars) ? "#ffc107" : "#e4e5e9"}
            size={30}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
            onClick={() => setStars(ratingValue)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
