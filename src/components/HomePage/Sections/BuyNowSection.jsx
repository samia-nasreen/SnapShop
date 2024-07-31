const BuyNowSection = () => {
  const image = "/src/assets/jbl.jpeg"; // Update with your image path

  return (
    <div className="w-full flex h-[520px] mt-16 relative bg-black border-[16px] border-white">
      <div className="flex flex-col justify-center items-start text-white w-1/3 pl-16 z-10">
        <h2 className="text-sm font-medium text-green-400">Categories</h2>
        <p className="mt-8 text-4xl font-medium">Enhance Your</p>
        <p className="mt-2 mb-4 text-4xl font-medium">Music Experience</p>
        <div className="flex items-center space-x-4 mt-4 mb-4">
          <div className="flex flex-col items-center bg-white text-black p-4 rounded-full w-16 h-16">
            <div className="text-sm font-semibold">23</div>
            <div className="text-xs">Hours</div>
          </div>
          <div className="flex flex-col items-center bg-white text-black p-4 rounded-full w-16 h-16">
            <div className="text-sm font-semibold">05</div>
            <div className="text-xs">Days</div>
          </div>
          <div className="flex flex-col items-center bg-white text-black p-4 rounded-full w-16 h-16">
            <div className="text-sm font-semibold">59</div>
            <div className="text-xs">Mins</div>
          </div>
          <div className="flex flex-col items-center bg-white text-black p-4 rounded-full w-16 h-16">
            <div className="text-sm font-semibold">35</div>
            <div className="text-xs">Secs</div>
          </div>
        </div>

        <a href="#" className="mt-4">
          <button className="text-md bg-green-500 px-10 py-4 rounded text-white group-hover:bg-green-600 transition">
            Buy Now!
          </button>
        </a>
      </div>
      <div className="w-2/3 h-full relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10"></div>
        <img src={image} alt="Banner" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default BuyNowSection;
