import React, { useState, useEffect } from "react";
import "./App.css"
function App() {
  const [timeCount, setTimeCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    let countdownInterval;

    if (timeCount > -1) {
      countdownInterval = setInterval(() => {
        setCurrentTime(Math.floor(timeCount));
        setTimeCount((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(countdownInterval);
  }, [timeCount]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const newTimeCount = Math.floor(parseFloat(e.target.value));

      if (!isNaN(newTimeCount)) {
        setTimeCount(newTimeCount);
      } else {
        setCurrentTime(0);
      }

      e.target.value = "";
    }
  };

  return (
    <div>
      <div className="countdown">
        <input type="number" id="timeCount" onKeyDown={handleKeyDown} />
        <div id="current-time">{currentTime}</div>
      </div>
    </div>
  );
}

export default App;
