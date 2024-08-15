import CategoryPanel from "./CategoryPanel";
import SliderCard from "./SliderCard";

const SliderSection = () => {
  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row py-10 relative">
        <div className="hidden sm:hidden md:block w-1/4">
          <CategoryPanel />
        </div>
        <div className="border-r-[1px] border-gray-300 hidden md:block absolute top-0 bottom-10 left-1/4 -ml-16"></div>
        <SliderCard className="w-full md:w-3/4" />
      </div>
    </div>
  );
};

export default SliderSection;
