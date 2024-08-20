const ProductDetailSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-8 px-4 mb-32 mx-auto max-w-screen-xl">
      <div className="w-full md:w-[650px] h-[300px] md:h-[550px] bg-gray-200 rounded-lg animate-pulse"></div>
      <div className="flex-1 space-y-4 w-full">
        <div className="h-8 bg-gray-200 rounded animate-pulse w-full md:w-3/4"></div>
        <div className="h-7 bg-gray-200 rounded animate-pulse w-full md:w-3/4"></div>
        <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4 md:w-1/2"></div>
        <div className="h-5 bg-gray-200 rounded animate-pulse w-3/4 md:w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
        <div className="h-5 bg-gray-200 rounded animate-pulse w-full"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2"></div>
        <div className="h-3 bg-gray-200 rounded animate-pulse w-1/3"></div>
        <div className="h-3 bg-gray-200 rounded animate-pulse w-1/4"></div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
