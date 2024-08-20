import React from "react";
import Button from "../../../components/UI/Button";
import TimerCircle from "../../../components/UI/TimerCircle";
import useCountdown from "../../../hooks/useCountdown";

const BuyNowSection: React.FC = () => {
  const { days, hours, minutes, seconds } = useCountdown({
    days: 23,
    hours: 5,
    minutes: 59,
    seconds: 35,
  });

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
        <div className="relative flex items-center space-x-2 md:space-x-4 mt-4 mb-4">
          <TimerCircle time={days} unit="Days" />
          <TimerCircle time={hours} unit="Hours" />
          <TimerCircle time={minutes} unit="Mins" />
          <TimerCircle time={seconds} unit="Secs" />
        </div>
        <a href="#" className="mt-4">
          <Button
            text="Buy Now!"
            onClick={() => {}}
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
