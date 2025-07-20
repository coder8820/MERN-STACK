import { useEffect, useState } from 'react';
import './index.css';

export const CleanUp = () => {
    const [count, setCount] = useState(9999999990);

    useEffect(()=> {
        const timer = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);
        // Cleanup function to clear the interval
        return () => clearInterval(timer);
        
    },[])
    return(
        <div className="container">
            <h1>My Subscription on YouTube</h1>
            <p>
                <span className='subscribe'>{count}</span>
            </p>
            <h2>Subscribers Realtime Counter</h2>
        </div>
    )
}