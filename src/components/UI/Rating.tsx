import React from "react";

interface RatingProps {
  rating: number;
  size: string;
}

const Rating: React.FC<RatingProps> = ({ rating, size }) => {
  const renderStars = (rating: number) => {
    const stars: JSX.Element[] = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-${size} h-${size} ${
            i <= rating ? "text-yellow-500" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    return stars;
  };

  return <div className="flex items-center">{renderStars(rating)}</div>;
};

export default Rating;
