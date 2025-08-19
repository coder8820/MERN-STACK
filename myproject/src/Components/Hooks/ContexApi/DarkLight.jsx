import { createContext, use, useState } from "react";
import "./index.css";
// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    const body = document.body;
    const heading = document.querySelector("h1");
    if (theme === "light") {
      body.style.backgroundColor = "#333";
      body.style.color = "#fff";
        heading.style.color = "#fff";
    } else {
      body.style.backgroundColor = "#fff";
      body.style.color = "#000";
        heading.style.color = "#000";
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const DarkMode = () => {
  const { theme, handleToggleTheme } = use(ThemeContext);
  return (
    <div className="p-4 flex flex-col items-center justify-center min-h-screen">
      <h1 className="">Dark Mode Webste Here</h1>
      <p>Toggle between light and dark mode using the context API.</p>
      <button onClick={handleToggleTheme}>
        {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};
