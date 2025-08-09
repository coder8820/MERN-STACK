import { BioProvider } from "./Components/Hooks/ContexApi";
import { Home } from "./Components/Hooks/ContexApi/Home";

export const App = () => {
  return (
    <>
      <BioProvider>
        <Home />
      </BioProvider>
    </>
  );
};
