import { useState, useEffect } from "react";

function TimerApp() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      console.log("Timer started");
      intervalId = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (intervalId) {
        
        clearInterval(intervalId);
        console.log("Timer cleaned up");
      }
    };
  }, [isRunning]);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>


      <h2>Timer: {count}s</h2>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default TimerApp;