import { useState } from "react";
import Color from "./Color";

const Colors = () => {
  const [selectedColor, setSelectedColor] = useState("blue");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="flex space-x-3 items-center">
      <span className="md:text-lg text-gray-900 mr-2">Colours:</span>
      <Color
        color="blue"
        selectedColor={selectedColor}
        onColorChange={handleColorChange}
      />
      <Color
        color="red"
        selectedColor={selectedColor}
        onColorChange={handleColorChange}
      />
    </div>
  );
};

export default Colors;
