import React, { useEffect, useState } from 'react';
import './Stopwatch.scss'

const Stopwatch = ({ isRunning }) => {
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      if (startTime === null) {
        setStartTime(Date.now() - elapsedTime * 1000);
      }

      intervalId = setInterval(() => {
        const currentTime = Date.now();
        setElapsedTime(Math.floor((currentTime - startTime) / 1000));
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, startTime, elapsedTime]);

  return (
    <div className="stopwatch" style={{ display: isRunning ? 'block' : 'none' }}>
      <h3>Stopwatch</h3>
      <p>Elapsed Time: {elapsedTime} seconds</p>
    </div>
  );
};

export default Stopwatch;
