
import { DarkMode, ThemeProvider } from "./Components/Hooks/ContexApi/DarkLight";

export const App = () => {
  return (
    <>
      <ThemeProvider>
        <DarkMode />
      </ThemeProvider>
    </>
  );
};
