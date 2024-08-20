const ProfileSkeleton = () => {
  return (
    <div className="min-h-screen flex justify-center pt-8 relative">
      <div className="container mx-auto mb-32 px-8">
        <div className="flex flex-col md:flex-row justify-between animate-pulse space-y-4 md:space-y-0">
          <div className="w-2/3 md:w-1/3 h-6 bg-gray-300 rounded"></div>
          <div className="w-2/3 md:w-1/3 h-6 bg-gray-300 rounded"></div>
        </div>
        <div className="flex flex-col md:flex-row w-full mt-8 animate-pulse space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/4 h-[300px] md:h-[500px] bg-gray-300 rounded"></div>
          <div className="w-full md:w-3/4 space-y-4">
            <div className="w-full h-12 bg-gray-300 rounded"></div>
            <div className="w-full h-12 bg-gray-300 rounded"></div>
            <div className="w-full h-12 bg-gray-300 rounded"></div>
            <div className="w-full h-24 bg-gray-300 rounded"></div>
            <div className="w-full h-48 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
