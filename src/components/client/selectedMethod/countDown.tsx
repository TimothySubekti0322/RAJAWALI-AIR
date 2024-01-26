import React, { useState, useEffect } from "react";

interface CountdownProps {
  initialHours: number;
  initialMinutes: number;
  initialSeconds: number;
}

const Countdown: React.FC<CountdownProps> = ({
  initialHours,
  initialMinutes,
  initialSeconds,
}) => {
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          } else {
            clearInterval(timer);
            // Handle countdown completion logic here
          }
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [hours, minutes, seconds]);

  return (
    <div className="flex">
      <div className="ml-5 h-5 w-5 flex items-center justify-center bg-[#1E90FF] rounded">
        <p className="text-xs font-semibold">
          {String(hours).padStart(2, "0")}
        </p>
      </div>
      <p className="mx-2 text-[#1E90FF] -mt-1">:</p>
      <div className="h-5 w-5 flex items-center justify-center bg-[#1E90FF] rounded">
        <p className="text-xs font-semibold">
          {String(minutes).padStart(2, "0")}
        </p>
      </div>
      <p className="mx-2 text-[#1E90FF] -mt-1">:</p>
      <div className="h-5 w-5 flex items-center justify-center bg-[#1E90FF] rounded">
        <p className="text-xs font-semibold">
          {String(seconds).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
};

export default Countdown;

export type { CountdownProps };
