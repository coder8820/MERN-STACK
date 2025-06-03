import { useState } from "react";
import "../EV.css";
export const State = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(() => count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(() => count - 1);
    } else {
      alert("Count cannot be negative");
    }
  };

  return (
    <div className="container">
        <div className="main-div">
          <h1>{count}</h1>
          <div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
          </div>
        </div>
        <ChiledComponent counts={count} />
    </div>
  );
};

export const ChiledComponent = ({ counts }) => {
  console.log("Child component rendered");
  return (
    <div className="main-div">
      <h2>Child Component</h2>
      <p>Count from Parent: {counts}</p>
    </div>
  );
};
