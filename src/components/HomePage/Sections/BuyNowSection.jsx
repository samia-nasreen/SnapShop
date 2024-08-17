import Button from "../../UI/Button";

const BuyNowSection = () => {
  return (
    <div className="w-full flex flex-col md:flex-row h-auto md:h-[520px] mt-16 relative bg-black border-[16px] border-white">
      <div className="flex flex-col justify-center items-start text-white w-full md:w-1/3 pl-12 md:pl-16 z-10 py-8 md:py-0">
        <h2 className="text-xs md:text-sm font-medium text-green-400">
          Categories
        </h2>
        <p className="mt-4 md:mt-8 text-2xl md:text-4xl font-medium">
          Enhance Your
        </p>
        <p className="mt-2 mb-4 text-2xl md:text-4xl font-medium">
          Music Experience
        </p>
        <div className="flex items-center space-x-2 md:space-x-4 mt-4 mb-4">
          <div className="flex flex-col items-center bg-white text-black p-2 md:p-4 rounded-full w-12 md:w-16 h-12 md:h-16">
            <div className="text-xs md:text-sm font-semibold">23</div>
            <div className="text-[10px] md:text-xs">Hours</div>
          </div>
          <div className="flex flex-col items-center bg-white text-black p-2 md:p-4 rounded-full w-12 md:w-16 h-12 md:h-16">
            <div className="text-xs md:text-sm font-semibold">05</div>
            <div className="text-[10px] md:text-xs">Days</div>
          </div>
          <div className="flex flex-col items-center bg-white text-black p-2 md:p-4 rounded-full w-12 md:w-16 h-12 md:h-16">
            <div className="text-xs md:text-sm font-semibold">59</div>
            <div className="text-[10px] md:text-xs">Mins</div>
          </div>
          <div className="flex flex-col items-center bg-white text-black p-2 md:p-4 rounded-full w-12 md:w-16 h-12 md:h-16">
            <div className="text-xs md:text-sm font-semibold">35</div>
            <div className="text-[10px] md:text-xs">Secs</div>
          </div>
        </div>
        <a href="#" className="mt-4">
          <Button
            text="Buy Now!"
            onClick={null}
            fontSize="base"
            color="bg-green-500"
            hoverColor="hover:bg-green-600"
          />
        </a>
      </div>
      <div className="w-full md:w-2/3 h-64 md:h-full relative">
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black via-transparent to-transparent z-10"></div>
        <img
          src="/assets/jbl.jpeg"
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default BuyNowSection;
