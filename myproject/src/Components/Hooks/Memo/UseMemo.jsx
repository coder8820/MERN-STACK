import { useState } from "react"


export const MemoParentComponent =() =>{

    const [count, setCount] = useState(0)

    return(
        <>
            <div className="p-4 h-lvh fond-display flex flex-col justify-center items-center tracking-wider">
                <button
                onClick={() => setCount(count + 1)}
                className="bg-blue-400 text-white px-3 py-2 rounded-md" 
                >Re-render Parent</button>
                <p>Parent re-render counts: {count}</p>
            </div>
        </>
    )
}