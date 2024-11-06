import React, { useRef, useState } from "react";
import "./App.css";

const App = () => {
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);

  const handleOperation = (operator) => {
    const inputValue = parseFloat(inputRef.current.value);
    if (isNaN(inputValue)) return;

    setResult((prevResult) => {
      switch (operator) {
        case "add":
          return prevResult + inputValue;
        case "subtract":
          return prevResult - inputValue;
        case "multiply":
          return prevResult * inputValue;
        case "divide":
          return inputValue === 0 ? "Error" : prevResult / inputValue;
        default:
          return prevResult;
      }
    });
  };

  const resetInput = () => {
    inputRef.current.value = "";
  };

  const resetResult = () => {
    setResult(0);
    inputRef.current.value = "";
  };

  return (
    <div>
      <h1>Simplest Working Calculator</h1>
      <form>
        <p>{result}</p>
        <input
          type="number"
          ref={inputRef}
          name="number"
          placeholder="Type a number"
        />
        <br />
        <button type="button" onClick={() => handleOperation("add")}>add</button>
        <button type="button" onClick={() => handleOperation("subtract")}>subtract</button>
        <button type="button" onClick={() => handleOperation("multiply")}>multiply</button>
        <button type="button" onClick={() => handleOperation("divide")}>divide</button>
        <button type="button" onClick={resetInput} className="reset-btn">reset input</button>
        <button type="button" onClick={resetResult} className="reset-btn">reset result</button>
      </form>
      <footer>
        <span>Copyright © 2024 Omar Khan. All rights reserved.</span>
      </footer>
    </div>
  );
};

export default App;
