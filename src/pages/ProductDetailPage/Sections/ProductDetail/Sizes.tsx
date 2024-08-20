import { useState } from "react";
import React from "react";

const Sizes = () => {
  const [selectedSize, setSelectedSize] = useState("M");

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className="flex space-x-4 items-center space-y-2">
      <span className="md:text-lg text-gray-900 mt-2 mr-2">Size:</span>
      {["XS", "S", "M", "L", "XL"].map((size) => (
        <button
          key={size}
          onClick={() => handleSizeChange(size)}
          className={`w-7 md:w-8 h-7 md:h-8 rounded font-medium text-sm flex items-center justify-center ${
            selectedSize === size
              ? "bg-red-500 text-white"
              : "border-[1px] border-gray-900 text-gray-600 shadow-sm"
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default Sizes;
