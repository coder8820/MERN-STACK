import { createContext } from "react";

// 1st step 
export const BioContext = createContext();

// 2nd step 
export const BioProvider = ({children}) => {
    const myname = "Pro Coder";
    const age = 25;
    const profession = "Software Engineer";
    console.log(children)
    return <BioContext.Provider value={{myname,age,profession}}>
        {children}
    </BioContext.Provider>
    
}


