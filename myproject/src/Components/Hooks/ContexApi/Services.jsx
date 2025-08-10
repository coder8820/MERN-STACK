import { useContext } from "react";
import { BioContext } from ".";

export const Services = () => {
  const { myname, age, profession } = useContext(BioContext);
  return (
    <>
      <section className="p-4 h-lvh font-display tracking-wider flex flex-col items-center justify-center bg-gray-400 text-white">
        <h1>
          This is Services page Data. My name is {myname}, age {age} and
          profession:
          {profession}
        </h1>
      </section>
    </>
  );
};
