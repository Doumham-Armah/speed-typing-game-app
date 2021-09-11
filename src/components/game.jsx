import React from "react";
import { useState } from "react";

const Game = () => {
  const [text, setText] = useState("");

  const wordCount = (text) => {
    const count = text
      .trim() //trim away spaces at beginning & end of sentence
      .split(" ")
      .filter((word) => word !== "").length; //filter out any spaces in resulting array
    console.log(`count: ${count}`);
  };
  console.log(text);
  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <h4>Time reminaing: ???</h4>
      <button
        onClick={() => {
          wordCount(text);
        }}
      >
        Start
      </button>
      <h1>Word count: ???</h1>
    </div>
  );
};

export default Game;
