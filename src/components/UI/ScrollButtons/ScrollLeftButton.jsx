/* eslint-disable react/prop-types */
const ScrollLeftButton = ({ scrollLeft }) => {
  return (
    <button
      onClick={scrollLeft}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
    >
      <svg
        className="w-6 h-6 text-gray-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      </svg>
    </button>
  );
};

export default ScrollLeftButton;
