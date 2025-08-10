import { createContext } from "react";

// 1st step 
// eslint-disable-next-line react-refresh/only-export-components
export const BioContext = createContext();

// 2nd step 
export const BioProvider = ({children}) => {
    const myname = "Pro Coder";
    const age = 25;
    const bio = 'This is my bio';
    const profession = "Software Engineer";
    console.log(children)
    return <BioContext.Provider value={{myname,age,profession, bio}}>
        {children}
    </BioContext.Provider>
    
}


