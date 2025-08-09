import { BioProvider } from "./Components/Hooks/ContexApi";
import { About } from "./Components/Hooks/ContexApi/About";
import { Home } from "./Components/Hooks/ContexApi/Home";

export const App = () => {
  return (
    <>
      <BioProvider>
        <Home />
        <About />
      </BioProvider>
    </>
  );
};
