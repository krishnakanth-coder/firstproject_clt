import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countDownDate = new Date('Dec 31, 2024 23:59:59').getTime();
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center mt-3 w-full lg:w-1/2 mx-auto ">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Countdown Timer</h1>
      <div className="text-4xl font-mono text-gray-700 space-x-2">
        <span>{timeLeft.days}</span> <span>Days</span>
        <br />
        <span>{timeLeft.hours}</span> <span>Hours</span>
        <br />
        <span>{timeLeft.minutes}</span> <span>Minutes</span>
        <br />
        <span>{timeLeft.seconds}</span> <span>Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
