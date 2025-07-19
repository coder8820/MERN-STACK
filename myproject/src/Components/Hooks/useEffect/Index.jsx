import { useEffect, useState } from 'react'
import './index.css'


export const ReactUseEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('Count value changed:', count);
    },[count]);
    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            console.log('Count cannot be negative');
        }
    }
    return (
        <div className="container">
            <h1>React useEffect Hook</h1>
            <p>Count: {count}</p>
            <button onClick={() =>setCount(count + 1)}>Add Button</button>
            <button onClick={() =>handleDecrement()}>Decrement Button</button>
            <button onClick={() => setCount(0)}>Reset Button</button>
        </div>
    )
}