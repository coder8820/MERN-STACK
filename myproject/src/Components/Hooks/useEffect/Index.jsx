import { useEffect, useState } from 'react'
import './index.css'


export const ReactUseEffect = () => {
    const [date, setDate] = useState(0);
    useEffect(() => {
        const setInterval = setInterval(() => {
            const upDatedDate = new Date();
            setDate(upDatedDate.toLocaleTimeString);
        }, 1000);
    },[]);
    
    return (
        <div className="container">
            <h1>React useEffect Hook</h1>
            <h2>Current Date: {date}</h2>

        </div>
    )
}