import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [pattern, setPattern] = useState("");
  const [times, setTimes] = useState(0);
  const [diamond, setDiamond] = useState([]);

  const handlePatternChange = (event) => {
    setPattern(event.target.value);
  };

  const handleTimesChange = (event) => {
    setTimes(Number(event.target.value));
  };

  const generateDiamond = () => {
    const patternInput = document.querySelector(".pattern");
    const timesInput = document.querySelector(".times");
    const pattern = patternInput.value;
    const times = parseInt(timesInput.value, 10);

    const diamondContainer = document.querySelector(".diamond");
    diamondContainer.innerHTML = ""; // Clear previous pattern

    for (let i = 0; i < times; i++) {
      const spaces = " ".repeat(Math.abs(times / 2 - i));
      const chars = pattern.repeat(2 * i + 1);
      const line = spaces + chars + "<br>";
      diamondContainer.innerHTML += line;
    }

    for (let i = times - 2; i >= 0; i--) {
      const spaces = " ".repeat(Math.abs(times / 2 - i));
      const chars = pattern.repeat(2 * i + 1);
      const line = spaces + chars + "<br>";
      diamondContainer.innerHTML += line;
    }
  };

  return (
    <div className="App">
      <header>
        <h1> Pattern Generator</h1>
      </header>
      <div className="input-container">
        <div className="input-group">
          <label htmlFor="pattern">Pattern to input:</label>
          <input
            id="pattern"
            className="pattern"
            type="text"
            onChange={handlePatternChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="pattern">Rows to Generate</label>
          <input
            id="times"
            className="times"
            type="number"
            onChange={handleTimesChange}
          />
        </div>
        <div className="input-group">
          <button onClick={generateDiamond}>Generate</button>
        </div>
        <br />
        <div className="diamond">
          {diamond.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
