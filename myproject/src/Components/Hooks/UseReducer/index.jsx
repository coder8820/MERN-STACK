import { useReducer } from "react"

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
            <h1>Helo! UseReducer Hook.{count}</h1>
            <button onClick={() => dispatch({type: "increment"})}>Increment</button>
            <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
        </div>
    )
}