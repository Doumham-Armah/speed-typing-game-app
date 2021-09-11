import { useState } from "react";

function App() {
  const [text, setText] = useState("");
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
      <button>Start</button>
      <h1>Word count: ???</h1>
    </div>
  );
}

export default App;
