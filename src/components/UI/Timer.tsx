import React from "react";
import formatTime from "../../utils/formatTime";

interface TimerCircleProps {
  time: number;
  unit: string;
  lastItem?: boolean; 
}

const Timer: React.FC<TimerCircleProps> = ({ time, unit, lastItem = false }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex flex-col items-center min-w-7 md:min-w-14">
        <span className="text-[8px] md:text-[11px] font-semibold text-gray-900">
          {unit}
        </span>
        <span className="font-semibold text-xl md:text-3xl">
          {formatTime(time)}
        </span>
      </div>
      {!lastItem && (
        <span className="text-red-500 font-semibold text-xl md:text-3xl mt-8 md:mt-7">
          :
        </span>
      )}
    </div>
  );
};

export default Timer;

