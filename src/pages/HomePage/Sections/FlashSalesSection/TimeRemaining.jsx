/* eslint-disable react/prop-types */
import useCountdown from "../../../../hooks/useCountdown";
import Timer from "../../../../components/UI/Timer";

const CountdownTimer = () => {
  const { days, hours, minutes, seconds } = useCountdown({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  return (
    <div className="text-2xl text-gray-900 flex items-center">
      <div className="flex flex-col">
        <div className="flex space-x-4">
          <Timer time={days} unit="Days" />
          <Timer time={hours} unit="Hours" />
          <Timer time={minutes} unit="Minutes" />
          <Timer time={seconds} unit="Seconds" lastItem />
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
