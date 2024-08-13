const NewArrivalSection = () => {
  return (
    <div className="py-8 mt-16 mb-12 px-4 bg-white relative">
      <div className="flex items-center mb-6">
        <div className="bg-red-500 w-4 h-8 mr-4 rounded"></div>
        <span className="text-red-500 font-semibold">Featured</span>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-3xl font-medium mb-12">New Arrival</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
        <div className="relative group md:col-span-2 md:row-span-2">
          <img
            src="src/assets/ps5pro.jpg"
            alt="PlayStation 5 Pro"
            className="w-full h-full object-cover rounded"
          />
          <div className="absolute bottom-4 left-4 p-4 w-full text-white">
            <h3 className="text-xl md:text-2xl font-semibold">PlayStation 5 Pro</h3>
            <p className="text-sm md:text-md md:w-2/3 my-2 md:my-3">
              A new Sony PlayStation 5 Pro launching soon.
            </p>
            <button className="mt-2 text-sm md:text-lg pb-1 border-b-[1.5px] border-gray-500 hover:text-gray-300">
              Shop Now
            </button>
          </div>
        </div>
        <div className="relative group md:col-span-2">
          <img
            src="src/assets/woman.jpg"
            alt="Women's Collections"
            className="w-full h-full object-cover rounded"
          />
          <div className="absolute bottom-4 left-4 p-4 w-full text-white">
            <h3 className="text-xl md:text-2xl font-semibold">Women&apos;s Collections</h3>
            <p className="text-sm mr-2 md:text-md md:w-1/2 my-2 md:my-3">
              Featured woman collections that give you another vibe.
            </p>
            <button className="mt-2 text-sm md:text-lg pb-1 border-b-[1.5px] border-gray-500 hover:text-gray-300">
              Shop Now
            </button>
          </div>
        </div>
        <div className="relative group">
          <img
            src="src/assets/headphones.jpg"
            alt="Headphones"
            className="w-full h-full object-cover rounded"
          />
          <div className="absolute bottom-4 left-4 p-4 w-full text-white">
            <h3 className="text-xl md:text-2xl font-semibold">Headphones</h3>
            <p className="text-sm md:text-md my-2 md:my-3">Wireless Headphones</p>
            <button className="mt-2 text-sm md:text-lg pb-1 border-b-[1.5px] border-gray-500 hover:text-gray-300">
              Shop Now
            </button>
          </div>
        </div>
        <div className="relative group">
          <img
            src="src/assets/gucci.jpg"
            alt="Perfume"
            className="w-full h-full object-cover rounded"
          />
          <div className="absolute bottom-4 left-4 p-4 w-full text-white">
            <h3 className="text-xl md:text-2xl font-semibold">Perfume</h3>
            <p className="text-sm md:text-md my-2 md:my-3">GUCCI INTENSE OUD EDP</p>
            <button className="mt-2 text-sm md:text-lg pb-1 border-b-[1.5px] border-gray-500 hover:text-gray-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalSection;
