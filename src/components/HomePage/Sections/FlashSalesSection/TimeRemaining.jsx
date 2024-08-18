/* eslint-disable no-unused-vars */
import useCountdown from "../../../../hooks/useCountdown";

const TimeRemaining = () => {
  const { days, hours, minutes, seconds } = useCountdown({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  const formattedTime = (time) => {
    return time < 10 ? `0${time}` : time.toString();
  };

  return (
    <div className="text-2xl text-gray-900 flex items-center">
      <div className="flex flex-col">
        <div className="flex space-x-8 text-[8px] md:text-[11px] font-semibold text-gray-900">
          <span className="mr-3">Days</span>
          <span>Hours</span>
          <span>Minutes</span>
          <span>Seconds</span>
        </div>
        <div className="flex space-x-4">
          <span className="font-semibold text-xl md:text-3xl">
            {formattedTime(days)}
          </span>
          <span className="text-red-500 mx-1">:</span>
          <span className="font-semibold text-xl md:text-3xl">
            {formattedTime(hours)}
          </span>
          <span className="text-red-500 mx-1">:</span>
          <span className="font-semibold text-xl md:text-3xl">
            {formattedTime(minutes)}
          </span>
          <span className="text-red-500 mx-1">:</span>
          <span className="font-semibold text-xl md:text-3xl">
            {formattedTime(seconds)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TimeRemaining;
