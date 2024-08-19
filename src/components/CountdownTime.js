import React, { useState, useEffect } from 'react';

// Function to calculate the remaining time
const calculateTimeLeft = (targetDateTime) => {
  const now = new Date();
  const targetDate = new Date(targetDateTime);
  const difference = targetDate - now;

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

const CountdownTime = (props) => {
  const { upcomingEvent } = props;
  console.log({ upcomingEvent });
  const { marriageDate, marriageTime, brideName, groomName } = upcomingEvent;

  const targetDateTime = `${marriageDate}T${marriageTime}`;

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDateTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDateTime));
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [targetDateTime]);

  return (
    <div className=" bg-white mt-5 p-6 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        {`  ${brideName} Weds ${groomName}`}
      </h2>
      <div className="text-2xl font-bold">
        <span className="block">{timeLeft.days} Days</span>
        <span className="block">{timeLeft.hours} Hours</span>
        <span className="block">{timeLeft.minutes} Minutes</span>
        <span className="block">{timeLeft.seconds} Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTime;
