import { FC } from "react";
import { getStarIcon } from "../utils";

const renderStars = (rating: number): JSX.Element[] => {
  return [...Array(5)].map((_, index) => {
    const StarIcon = getStarIcon(rating, index);
    return <StarIcon key={index} size={22} className="text-yellow-500" />;
  });
};

export const Rating: FC<{ rating: number }> = ({ rating }) => {
  return (
    <div
      className="flex space-x-1"
      aria-label={`Rating of ${rating} out of 5 stars`}
    >
      {renderStars(rating)}
    </div>
  );
};
