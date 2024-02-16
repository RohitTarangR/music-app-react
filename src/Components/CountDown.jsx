import React, { useEffect, useState } from "react";

const CountDown = () => {
  const [countDownTime, setCountDownTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  // Calculate time difference and update state
  const getTimeDifference = () => {
    const targetDate = new Date("2024-02-18T00:00:00"); // Set your target date and time
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      // Countdown reached or surpassed
      clearInterval(timer);
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    setCountDownTime({
      days: days.toString().padStart(2, "0"),
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
    });
  };

  useEffect(() => {
    const timer = setInterval(getTimeDifference, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#ffcc5f] rounded-lg">
      <h2 className="text-xl font-semibold mb-2 max-lg:text-center">Offer expires in:</h2>
      <div className="flex space-x-4">
        <div className="flex flex-col items-center">
          <span className="text-5xl font-bold bg-white p-3 max-md:p-2 max-md:text-2xl">
            {countDownTime.days}
          </span>
          <p className="text-black font-semibold max-md:text-xs my-2 max-md:font-bold"> Days</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl font-bold bg-white p-3 max-md:p-2 max-md:text-2xl">
            {countDownTime.hours}
          </span>
          <p className="text-black font-semibold max-md:text-xs my-2 max-lg:font-bold"> Hours</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl font-bold bg-white p-3 max-md:p-2 max-md:text-2xl">
            {countDownTime.minutes}
          </span>
          <p className="text-black font-semibold max-md:text-xs my-2 max-md:font-bold"> Minutes</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl font-bold bg-white p-3 max-md:p-2 max-md:text-2xl">
            {countDownTime.seconds}
          </span>
          <p className="text-black font-semibold max-md:text-xs my-2 max-md:font-bold"> Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
