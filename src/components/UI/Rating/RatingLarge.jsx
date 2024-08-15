/* eslint-disable react/prop-types */
const RatingLarge = ({ rating, ratingCount }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 ${
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
  return (
    <div className="flex items-center h-4">
      <div className="flex items-center">{renderStars(rating)}</div>
      <span className="ml-2 text-gray-500">({ratingCount} Reviews)</span>
      <span className="text-gray-500 px-4">|</span>
      <span className="text-green-500">In Stock</span>
    </div>
  );
};

export default RatingLarge;
