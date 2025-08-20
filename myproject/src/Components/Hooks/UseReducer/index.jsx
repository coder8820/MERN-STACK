import { useReducer } from "react"

export const ReducerCompo = () =>{

    const reducer = (state, action) => {
    }
    console.log(reducer)
    // useReducer takes a reducer function and an initial state
    const [count, dispatch] = useReducer(reducer, 0)
    console.log(useReducer(reducer, 0))

    return(
        <div className="p-5 flex flex-col items-center justify-center screen h-screen bg-gray-200">
            <h1>Helo! UseReducer Hook.{count}</h1>
            <button className="bg-gray-700" type="increment">Increment</button>
            <button type="decrement">Decrement</button>
        </div>
    )
}