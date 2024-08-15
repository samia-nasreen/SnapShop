import { useState } from "react";

const Colors = () => {
  const [selectedColor, setSelectedColor] = useState("blue");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="flex space-x-3 items-center">
      <span className="md:text-lg text-gray-900 mr-2">Colours:</span>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="radio"
          name="color"
          className="hidden"
          onChange={() => handleColorChange("blue")}
          defaultChecked={selectedColor === "blue"}
        />
        <span
          className={`w-5 h-5 rounded-full flex items-center justify-center ${
            selectedColor === "blue" ? "ring-2 ring-gray-800" : ""
          }`}
        >
          <span className="w-4 h-4 rounded-full bg-blue-300"></span>
        </span>
      </label>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="radio"
          name="color"
          className="hidden"
          onChange={() => handleColorChange("red")}
          defaultChecked={selectedColor === "red"}
        />
        <span
          className={`w-5 h-5 rounded-full flex items-center justify-center ${
            selectedColor === "red" ? "ring-2 ring-gray-800" : ""
          }`}
        >
          <span className="w-4 h-4 rounded-full bg-red-400"></span>
        </span>
      </label>
    </div>
  );
};

export default Colors;
