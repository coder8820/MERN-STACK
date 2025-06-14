import "./States.css";
import { useState } from "react";

export const Container = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Count cannot be less than zero");
    }
  };

  return (
    <div className="container">
      <h1>UseState Hook</h1>
      <br />
      <p>This is a simple container component.</p>
      <p>Count: {count}</p>
      <div className="button-container">
        <button onClick={() => increment()}>Incremnet</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => handleDecrement()}>Decrement</button>
      </div>
    </div>
  );
};
