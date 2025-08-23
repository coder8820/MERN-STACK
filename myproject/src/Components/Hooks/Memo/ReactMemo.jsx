import { useState } from "react";
import Counts from "./MemoCount";

export const ReactMemo = () => {
  const [count, setCount] = useState(0);

  const myBigData = {
    name: "kumail",
    age: 24,
    address: "Skardu",
    profession: "Developer",
  }

  return (
    <>
      <div className="p-5 flex flex-col items-center justify-center screen h-screen bg-gray-200">
        <h1>Count:{count}</h1>
        <button
          className="btn bg-cyan-500 py-1 px-3"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      <Counts prop={myBigData}/>
      </div>
    </>
  );
};
