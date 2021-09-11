import React, { useEffect } from "react";
import { useState } from "react";

const Game = () => {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [isTimeRunning, setIsTimeRunning] = useState(false);

  const wordCount = (text) => {
    const count = text
      .trim() //trim away spaces at beginning & end of sentence
      .split(" ")
      .filter((word) => word !== "").length; //filter out any spaces in resulting array
    console.log(`count: ${count}`);
  };

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsTimeRunning(false);
    }
  }, [timeRemaining, isTimeRunning]);

  console.log(text);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <h4>Time reminaing: {timeRemaining}</h4>
      <button
        onClick={() => {
          setIsTimeRunning(true);
        }}
      >
        Start
      </button>
      <h1>Word count: ???</h1>
    </div>
  );
};

export default Game;
