import { useState, useEffect } from "react";

interface CountdownProps {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const useCountdown = ({
  days = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
}: CountdownProps): TimeLeft => {
  const [timeLeft, setTimeLeft] = useState<number>(() => {
    const totalSeconds = days * 86400 + hours * 3600 + minutes * 60 + seconds;
    return totalSeconds;
  });

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalId);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = (totalSeconds: number): TimeLeft => {
    const d = Math.floor(totalSeconds / 86400);
    const h = Math.floor((totalSeconds % 86400) / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    return {
      days: d,
      hours: h,
      minutes: m,
      seconds: s,
    };
  };

  return formatTime(timeLeft);
};

export default useCountdown;
