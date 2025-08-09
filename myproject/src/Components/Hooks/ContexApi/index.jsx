import { createContext } from "react";

// 1st step 
export const BioContext = createContext();

// 2nd step 
export const BioProvider = ({children}) => {
    const myname = "Pro Coder";
    return <BioContext.Provider value={{myname}}>
        {children}
    </BioContext.Provider>
    
}


