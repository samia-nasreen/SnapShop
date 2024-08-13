import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SliderCard = () => {
  const images = [
    "/src/assets/test.jpg",
    "/src/assets/iphone6.jpeg",
    "/src/assets/iphone4.jpeg",
    "/src/assets/iphone5.webp",
    "/src/assets/iphone7.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full md:w-3/4 flex flex-row h-auto md:h-96 bg-black relative">
      <div className="flex flex-col justify-center items-start text-white w-full md:w-1/3 pl-4 md:pl-16 py-4 md:py-0">
        <div className="flex items-center mb-2">
          <FontAwesomeIcon icon={faApple} className="text-4xl md:text-6xl mr-2 -mt-1 md:-mt-4 mb-2 md:mb-4" />
          <h2 className="text-xs md:text-sm font-light -mt-2 md:-mt-6 ml-1 md:ml-2">iPhone 14 Series</h2>
        </div>
        <p className="mt-2 text-3xl md:text-5xl font-medium">Up to 10%</p>
        <p className="mt-2 md:mt-4 mb-2 md:mb-4 text-2xl md:text-4xl font-medium">off Voucher</p>
        <a href="#" className="mt-2 md:mt-4 flex items-center group">
          <span className="text-white text-sm md:text-md border-b-[1px] border-white group-hover:text-gray-300">
            Shop Now
          </span>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="ml-2 text-sm md:text-md text-white group-hover:text-gray-300"
          />
        </a>
      </div>
      <div className="w-full md:w-2/3 h-auto md:h-full">
        <img
          src={images[currentIndex]}
          alt="Slider"
          className="w-full h-3/4 mt-12 md:mt-0 md:h-full object-cover"
        />
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer ${
              index === currentIndex
                ? "bg-red-500 border-[1.5px] border-white"
                : "bg-gray-300 hover:bg-red-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderCard;
