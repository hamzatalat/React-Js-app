
import React, { useState, useEffect } from 'react';

const TimerExample = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>{seconds} seconds </h2>
      </header>
    </div>
  );
};

export default TimerExample;