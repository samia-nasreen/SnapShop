import RedSubHeading from "../../../UI/RedSubHeading";
import Heading from "../../../UI/Heading";
import ps5pro from "/assets/ps5pro.jpg";
import woman from "/assets/woman.jpg";
import headphones from "/assets/headphones.jpg";
import gucciPerfume from "/assets/gucci.jpg";
import NewArrivalItem from "./NewArrivalItem";

const NewArrivalSection = () => {
  return (
    <div className="py-8 mt-16 mb-24 px-4 bg-white relative">
      <RedSubHeading subHeading="Featured" />
      <Heading text="New Arrival" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <div className="relative group col-span-2 row-span-2 md:col-span-2 md:row-span-4 bg-white p-2 flex items-center justify-center">
          <NewArrivalItem
            image={ps5pro}
            altText="PS5 Pro"
            title="PlayStation 5 Pro"
            desc="A new Sony PlayStation 5 Pro launching soon."
          />
        </div>
        <div className="relative group col-span-2 row-span-1 md:col-span-2 md:row-span-2 bg-white p-2 flex items-center justify-center">
          <NewArrivalItem
            image={woman}
            altText="Women's Collections"
            title="Women's Collections"
            desc="Featured woman collections that give you another vibe."
          />
        </div>
        <div className="relative group col-span-1 row-span-1 md:col-span-1 md:row-span-2 bg-white p-2 flex items-center justify-center">
          <NewArrivalItem
            image={headphones}
            altText="Headphones"
            title="Headphones"
            desc="Wireless Headphones"
          />
        </div>
        <div className="relative group col-span-1 row-span-1 md:col-span-1 md:row-span-2 bg-white p-2 flex items-center justify-center">
          <NewArrivalItem
            image={gucciPerfume}
            altText="Perfume"
            title="Perfume"
            desc="GUCCI INTENSE OUD EDP"
          />
        </div>
      </div>
    </div>
  );
};

export default NewArrivalSection;
