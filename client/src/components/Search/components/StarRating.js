import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Rating from "./Rating";

const StarRating = ({starRating, setStarRating}) => {
  // const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
  
  <div>
    {[...Array(5)].map((_, i) => {
      const ratingValue = i + 1;

      return (
          <FaStar
            key={i}
            className="star"
            color={ratingValue <= (hover || starRating) ? "#ffc107" : "#e4e5e9"}
            size={30}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
            onClick={() => setStarRating(ratingValue)}
          />
      );
    })}
  </div> 
  );

};

export default StarRating;