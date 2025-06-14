import "./States.css";
import { useState } from "react";

export const Container=()=>{
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);

    return(
        <div className="container">
            <h1>UseState Hook</h1><br />
            <p>This is a simple container component.</p>
            <p>Count: {count}</p>
            <button onClick={()=>increment()}>Incremnet</button>
        </div>
    )
}