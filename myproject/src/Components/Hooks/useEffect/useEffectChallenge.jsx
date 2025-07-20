import { useEffect, useState } from "react";
import "./index.css";

export const UseEffectChallenge = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Count: ${count}`;
    // console.log(`Count has been updated to: ${count}`);
    console.log(`Name: ${name}`);
  }, [count, name]);
  return (
    <div className="container">
      <h1>UseEffect Challenge</h1>
      <p>
        Count: <span> {count} </span> 
      </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>
        Name: <span>{name}</span>
      </p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};
