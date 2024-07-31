import CategoryPanel from "../../UI/CategoryPanel";
import SliderCard from "../../UI/SliderCard";

const SliderSection = () => {
  return (
    <div className="relative">
      <div className="flex py-10 relative">
        <CategoryPanel />
        <div className="border-r-[1px] border-gray-300 absolute top-0 bottom-10 left-1/4 -ml-16"></div>
        <SliderCard />
      </div>
    </div>
  );
};

export default SliderSection;
