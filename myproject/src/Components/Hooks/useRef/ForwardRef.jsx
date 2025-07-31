import './index.css'
import React, { useRef } from "react";

export const ForwardRef = () =>{


    const username = useRef(null);
    const password = useRef(null);

    const handleFormSubmit =(e) =>{
        e.preventDefualt();
        alert("Form submitted with ForwardRef inputs");
    }

    
    return(
        <div className="container">
            <h1>ForwardRef Example</h1>
            <form onSubmit={handleFormSubmit}>
                <BeforeReact19Input ref={username}/>
                <BeforeReact19Input ref={password}/>
            </form>
        </div>
    )
}


const BeforeReact19Input = React.forwardRef((props, ref) =>{
    return(
        <input 
            type="text" 
            placeholder="Enter text" 
            ref={ref} 
            {...props} 
        />
    )
})