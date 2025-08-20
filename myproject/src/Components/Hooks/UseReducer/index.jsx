import { useReducer } from "react"

import '../ContexApi/index.css'

export const ReducerCompo = () =>{

    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return state + 1; // Increment the count
            case "decrement":
                return state - 1; // Decrement the count
            default:
                throw new Error(`Unknown action type: ${action.type}`); // Handle unknown action types
        }
    }

    // useReducer takes a reducer function and an initial state
    const [count, dispatch] = useReducer(reducer, 0)

    return(
        <div className="p-5 flex flex-col items-center justify-center screen h-screen bg-gray-200">
            <h1>Helo! UseReducer Hook.</h1>
            <h2 className="text-2xl font-bold mt-4">Count: {count}</h2>
            <button onClick={() => dispatch({type: "increment"})}>Increment</button>
            <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
        </div>
    )
}