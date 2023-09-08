import React, { useState, useEffect } from "react";

function Timer({minutes,seconds}) {
  

  return (
    <div>
      <div className="timer">
        <span>{String(minutes).padStart(2, "0")}</span>:
        <span>{String(seconds).padStart(2, "0")}</span>
      </div>
      {/* <button onClick={startTimer} disabled={isRunning}>
        Start Timer
      </button>
      <button onClick={stopTimer} disabled={!isRunning}>
        Stop Timer
      </button>
      <button onClick={resetTimer}>Reset Timer</button> */}
    </div>
  );
}

export default Timer;
