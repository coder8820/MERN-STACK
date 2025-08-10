import { BioProvider } from "./Components/Hooks/ContexApi";
import { About } from "./Components/Hooks/ContexApi/About";
import { Home } from "./Components/Hooks/ContexApi/Home";
import { Services } from "./Components/Hooks/ContexApi/Services";

export const App = () => {
  return (
    <>
      <BioProvider>
        <Home />
        <About />
        <Services />
      </BioProvider>
    </>
  );
};
