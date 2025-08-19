import { use } from "react";
import { BioContext } from ".";

export const About = () => {
  const { myname, age, profession } = use(BioContext);
  return (
    <>
      <section className="p-4 h-lvh font-display tracking-wider flex flex-col items-center justify-center bg-gray-100 text-white">
        <h1>
          This is about page Data. My name is {myname}, age {age} and
          profession:
          {profession}
        </h1>
      </section>
    </>
  );
};
