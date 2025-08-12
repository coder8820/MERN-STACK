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
        <div className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow-lg mt-4 h-full w-full max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Navigation</h2>
          <ul className="flex flex-col md:flex-row justify-center items-center gap-4 bg-white rounded-lg shadow-md ">
            <li className="flex justify-between items-center hover:bg-gray-200 transition-colors duration-300 w-full f-lex-1 text-success max-w-2xl m-t- p-l-4 p-r-4">
              <a href="#" className="text-lg">Home</a>
            </li>
            <li className="flex justify-between items-center p-4 hover:bg-gray-200 transition-colors duration-300">
              <a href="#" className="text-lg">About</a>
            </li>
            <li className="flex justify-between items-center p-4 hover:bg-gray-200 transition-colors duration-300">
              <a href="#" className="text-lg">Services</a>
            </li>
            <li className="flex justify-between items-center p-4 hover:bg-gray-200 transition-colors duration-300">
              <a href="#" className="text-lg">Login</a>
            </li>
            <li className="flex justify-between items-center p-4 hover:bg-gray-200 transition-colors duration-300">
              <a href="#" className="text-lg">Register</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
