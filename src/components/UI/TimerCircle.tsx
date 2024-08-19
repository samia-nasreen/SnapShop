import React from "react";
import formatTime from "../../utils/formatTime";

interface TimerCircleProps {
  time: number;
  unit: string;
}

const TimerCircle: React.FC<TimerCircleProps> = ({ time, unit }) => {
  return (
    <div className="flex flex-col items-center bg-white text-black p-2 md:p-4 rounded-full w-12 md:w-16 h-12 md:h-16">
      <div className="text-xs md:text-sm font-semibold">{formatTime(time)}</div>
      <div className="text-[10px] md:text-xs">{unit}</div>
    </div>
  );
};

export default TimerCircle;
