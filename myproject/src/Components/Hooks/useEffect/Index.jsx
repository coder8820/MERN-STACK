import { useEffect, useState } from 'react'
import './index.css'


export const ReactUseEffect = () => {
    const [date, setDate] = useState(0);
    useEffect(() => {
       setInterval(() => {
            const updatedDate = new Date();
            setDate(updatedDate.toLocaleTimeString());
        }, 1000);
    },[]);
    
    return (
        <div className="container">
            <h1>React useEffect Hook</h1>
            <h2>Current Date: {date}</h2>

        </div>
    )
}