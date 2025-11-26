"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#ffd700",
  grey: "#a9a9a9",
};

interface RatingProps {
  value?: number;
  count?: number;
  size?: number;
  onChange?: (rating: number) => void;
}

const Rating = ({ value = 3, count = 5, size = 24, onChange }: RatingProps) => {
  const [rating, setRating] = useState(value);
  const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);

  const stars = Array(count).fill(0);

  const handleClickStar = (newRating: number) => {
    setRating(newRating);
    if (onChange) {
      onChange(newRating);
    }
  };

  const handleMouseOverStar = (newHoverValue: number) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeaveStar = () => {
    setHoverValue(undefined);
  };

  return (
    <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
      {stars.map((_, index) => {
        return (
          <FaStar
            key={index}
            size={size}
            color={(hoverValue || rating) > index ? colors.orange : colors.grey}
            onClick={() => handleClickStar(index + 1)}
            onMouseOver={() => handleMouseOverStar(index + 1)}
            onMouseLeave={handleMouseLeaveStar}
            style={{ cursor: "pointer", transition: "color 0.2s ease-in-out" }}
          />
        );
      })}
    </div>
  );
};

export default Rating;
