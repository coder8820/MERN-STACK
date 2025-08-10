import { BioContext, useBioContext } from ".";

export const Home = () => {
  const { myname, age, profession, bio } = useBioContext();
  return (
    <>
      <section className="p-4 h-lvh font-display tracking-wider flex flex-col items-center justify-center bg-gray-300 text-white">
        <h1>
          Hello context api. My name is {myname}, age {age} and profession{" "}
          {profession}. Bio{bio}
        </h1>
      </section>
    </>
  );
};
