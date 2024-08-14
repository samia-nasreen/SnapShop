const Coupon = () => {
  return (
    <div className="w-full md:w-1/2 flex flex-col justify-center md:pr-4 mb-4 md:mb-0">
      <div className="flex w-full sm:w-6/7">
        <input
          type="text"
          placeholder="Coupon Code"
          className="p-2 sm:p-4 text-sm border-[1.5px] border-gray-600 rounded w-2/3 sm:w-3/5"
        />
        <button className="bg-red-500 text-white px-6 sm:px-10 py-2 sm:py-4 text-sm rounded ml-4">
          Apply Coupon
        </button>
      </div>
    </div>
  );
};

export default Coupon;