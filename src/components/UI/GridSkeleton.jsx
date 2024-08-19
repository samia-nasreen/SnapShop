/* eslint-disable react/prop-types */
const GridSkeleton = ({ lines = 1 }) => {
  return (
    <div className="space-y-8 mt-4 mb-6">
      {Array.from({ length: lines }).map((_, index) => (
        <div key={index} className="grid grid-cols-2 sm:grid-colds-3 md:grid-cols-4 gap-6">
          <div className="h-48 md:h-80 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="h-48 md:h-80 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="h-48 md:h-80 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="h-48 md:h-80 bg-gray-200 rounded-md animate-pulse"></div>
        </div>
      ))}
    </div>
  );
};

export default GridSkeleton;
