import { useEffect, useState } from 'react'
import './index.css'


export const ReactUseEffect = () => {
    const [date, setDate] = useState(0);
    const [time, setTime] = useState(0);
    useEffect(() => {
       setInterval(() => {
            const updatedTime = new Date().toLocaleTimeString();
            const updatedDate1 = new Date().toLocaleDateString();
            setDate(updatedDate1);
            setTime(updatedTime);
        }, 1000);
    },[]);
    
    return (
        <div className="container">
            <h1>React useEffect Hook</h1>
            <h2>Current Time: {time}</h2>
            <h2>Current Date: {date}</h2>
        </div>
    )
}