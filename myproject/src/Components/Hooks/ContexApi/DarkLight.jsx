import { Children, createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{
    return(
        <ThemeContext.Provider>
            {children}
        </ThemeContext.Provider>
    )
}