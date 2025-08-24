import { memo, useCallback, useState } from "react";
import "../ContexApi/index.css";

const Button = memo(({ handleClick, children }) => {
  return (
    <button
      onClick={handleClick}
      className={`text-black mb-4 py-2 px-4 rounded ${
        children === "Increment" ? "bg-green-900" : "bg-red-400"
      }`}
    >
      {children}
    </button>
  );
});

export const UseCallbakComponent = () => {
  const [count, setCount] = useState(0);

//   const increment = () =>{console.log("increment inside"); setCount((prev) => prev + 1)};

  const increment = useCallback(()=> {
            console.log("increment function called");
            setCount((prev) => prev + 1)
  },[]);


//   const decrement = () => setCount((prev) => prev - 1);

const decrement = useCallback(() => {
    console.log("decrement function called");
    setCount((prev) => prev - 1)
},[])


const reset = useCallback(() => {
    console.log("reset function called");
    setCount(0)
},[])

  return (
    <div className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-purple-300 text-center text-white gap-8">
      <div className=" container font-display tracking-wider flex flex-col justify-center items-center bg-purple-600 text-center text-white gap-8">
        <h1 className="mb-4">Count: {count}</h1>
        <Button handleClick={increment}>Increment</Button>
        <Button handleClick={decrement}>Decrement</Button>
        <Button handleClick={reset}>ResetCount</Button>
      </div>
    </div>
  );
};
