/* eslint-disable react/prop-types */

const ProductCard = ({ product }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <svg
            key={i}
            className="w-4 h-4 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            className="w-4 h-4 text-gray-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <div className="product-card max-w-64 shadow-inner rounded-lg p-4 relative overflow-hidden group cursor-pointer">
      <div className="relative w-full h-48 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-auto h-48 object-center rounded-t-lg"
        />
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
          -{product.discount}%
        </div>
        <div className="absolute top-2 right-2 flex space-x-2">
          <button className="bg-white p-1 rounded-full shadow-md">
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-100 text-white text-sm text-center  rounded-b py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <button className="w-full">Add To Cart</button>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
        <div className="flex items-center mt-2">
          <span className="text-lg font-medium text-red-500">
            ${product.price}
          </span>
          <span className="text-sm text-gray-600 ml-2 line-through">
            ${product.originalPrice}
          </span>
        </div>
        <div className="flex items-center mt-2">
          {renderStars(product.rating)}
          <span className="ml-1 text-sm text-gray-600">
            ({product.ratingCount})
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
