import "./States.css";
import { useState } from "react";

export const UseStateChallenge = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0)
  const increment = () => setCount(count + step);


  const handleDecrement = () => {
   setCount(count - step)
  };

  const handleReset =()=>{
    setCount(0)
    setStep(0)
  }

  return (
    <div className="container">
      <h1>UseState Challenge</h1>
      <br />
      <p>Count: {count}</p>
      <input type="number" value={step} onChange={(e)=>setStep(Number(e.target.value))} />
      <div className="button-container">
        <button onClick={() => increment()} disabled={count>=100}>Incremnet</button>
        <button onClick={() => handleReset()}>Reset</button>
        <button onClick={() => handleDecrement()} disabled={count<=0}>Decrement</button>
      </div>
    </div>
  );
};
