const TimeRemaining = () => {
  return (
    <div className="text-2xl text-gray-900 flex items-center">
      <div className="flex flex-col">
        <div className="flex space-x-8 text-[8px] md:text-[11px] -my-2 font-semibold text-gray-900">
          <span className="mr-3">Days</span>
          <span>Hours</span>
          <span>Minutes</span>
          <span>Seconds</span>
        </div>
        <div className="flex space-x-4">
          <span className="font-semibold text-xl md:text-3xl">03</span>
          <span className="text-red-500 mx-1">:</span>
          <span className="font-semibold text-xl md:text-3xl">23</span>
          <span className="text-red-500 mx-1">:</span>
          <span className="font-semibold text-xl md:text-3xl">19</span>
          <span className="text-red-500 mx-1">:</span>
          <span className="font-semibold text-xl md:text-3xl">56</span>
        </div>
      </div>
    </div>
  );
};

export default TimeRemaining;
