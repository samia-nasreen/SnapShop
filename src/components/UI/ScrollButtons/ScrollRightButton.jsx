/* eslint-disable react/prop-types */
const ScrollRightButton = ({ scrollRight }) => {
  return (
    <button
      onClick={scrollRight}
      className="absolute -right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
    >
      <svg
        className="w-6 h-6 text-gray-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
      </svg>
    </button>
  );
};

export default ScrollRightButton;
