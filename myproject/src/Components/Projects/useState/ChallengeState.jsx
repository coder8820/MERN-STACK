import "./States.css";
import { useState } from "react";

export const UseStateChallenge = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0)
  const increment = () => {
    setCount(count + step)
};

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - step);
    } else {
      alert("Count cannot be less than zero");
    }
  };

  return (
    <div className="container">
      <h1>UseState Challenge</h1>
      <br />
      <p>Count: {count}</p>
      <input type="number" value={step} onChange={(e)=>setStep(Number(e.target.value))} />
      <div className="button-container">
        <button onClick={() => increment()}>Incremnet</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => handleDecrement()}>Decrement</button>
      </div>
    </div>
  );
};
