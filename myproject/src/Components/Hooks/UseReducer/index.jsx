import { useReducer } from "react";

import "../ContexApi/index.css";

export const ReducerCompo = () => {
  const initailState = {
    count: 0, // Initial count value
    inc: 2,
    dec: 2,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return {
          ...state,
          count: state.count + 1,
        }; // Increment the count
      case "decrement":
        return {...state, count: state.count - 1 }; // Decrement the count
      case "reset":
        return {...state, count: 0 }; // Reset the count to zero
      default:
        throw new Error(`Unknown action type: ${action.type}`); // Handle unknown action types
    }
  };

  // useReducer takes a reducer function and an initial state
  const [state, dispatch] = useReducer(reducer, initailState);

  return (
    <div className="p-5 flex flex-col items-center justify-center screen h-screen bg-gray-200">
      <h1>Helo! UseReducer Hook.</h1>
      <h2 className="text-2xl font-bold mt-4">Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};
