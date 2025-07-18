import { useEffect, useState } from 'react'
import './index.css'

export const ReactUseEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('Component mounted or updated');
        return () => {
            console.log('Component unmounted');
        };
    },[])
    return (
        <div className="container">
            <h1>React useEffect Hook</h1>
            <p>Count: {count}</p>
            <button onClick={() =>setCount(count + 1)}>Add Button</button>
        </div>
    )
}