import { useState } from "react";
import "../ContexApi/index.css";

const Button = ({ handleClick, children }) => {
  console.log(`Rendering button - ${children}`);
  return (
    <button
      onClick={handleClick}
      className={`text-black mb-4 py-2 px-4 rounded ${
        children === "Increment" ? "bg-green-400" : "bg-red-400"
      }`}
    >
      {children}
    </button>
  );
};

export const UseCallbakComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  return (
    <div className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-purple-300 text-center text-white gap-8">
      <div className=" container font-display tracking-wider flex flex-col justify-center items-center bg-purple-600 text-center text-white gap-8">
        <h1 className="mb-4">Count: {count}</h1>
        <button
          onClick={increment}
          className="bg-blue-500 text-white px-4 py-4 rounded cursor-pointer"
        >
          InCrement
        </button>
        <button
          onClick={decrement}
          className="bg-blue-800 text-white px-8 py-8 rounded cursor-pointer"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};
