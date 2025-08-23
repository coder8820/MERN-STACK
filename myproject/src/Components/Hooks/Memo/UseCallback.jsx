import { useState } from "react"

export const UseCallbakComponent = () => {
    const [count, setCount] = useState(0)

    const increment =() => setCount((prev) => prev + 1);
    const decrement =() => setCount((prev) => prev - 1);
    return(
        <div className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-purple-600 text-center text-white">
            <h1 className="mb-4">
                Count: {count}
            </h1>
            <buttin onClick={increment}>InCrement</buttin>
            <buttin onClick={decrement}>Decrement</buttin>
        </div>
    )
}