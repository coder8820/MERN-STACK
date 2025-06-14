import { useState } from 'react';
import './Hooks.css'

export const ShortCirketExample = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState("")

    const hangleClear = () => {
        setUser("");
    }
    
    return(
        <section className="container short-container">
            <h1>Welcome to the short Cirket Elevation</h1>
            {isLoggedIn && <p>You are logged in!</p>}
            {user ? <p>Hello, {user}!</p> : <p>Please log in.</p>}
            <div className="grid-three-cols">
                <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>Toggle Login State</button>
                <button onClick={()=>setUser("kumail")}>Set User</button>
                <button onClick={()=> hangleClear()}>Clear User</button>
            </div>
        </section>
    )
} 