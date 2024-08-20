import React from "react";

interface NewArrivalItemProps {
  image: string;
  altText: string;
  title: string;
  desc: string;
}

const NewArrivalItem: React.FC<NewArrivalItemProps> = ({
  image,
  altText,
  title,
  desc,
}) => {
  return (
    <>
      <img src={image} alt={altText} className="w-full h-full object-cover" />
      <div className="absolute bottom-2 left-2 p-5 w-full text-white">
        <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
        <p className="text-sm md:text-md md:w-3/5 my-2 md:my-3">{desc}</p>
        <button className="mt-2 text-sm md:text-lg pb-1 border-b-[1.5px] border-gray-500 hover:text-gray-300">
          Shop Now
        </button>
      </div>
    </>
  );
};

export default NewArrivalItem;
