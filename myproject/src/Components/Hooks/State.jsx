import { useState } from 'react';
import '../EV.css'
export const State = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () =>{
        setCount(() => count + 1);
    }

    
    return(
        <>
          <div className='main-div'>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
          </div>
        </>
    )
}