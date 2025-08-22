import { useState } from "react"


const ExpensiveComponent = () => {
    const sum = ()=>{
        console.log("Calculating sum...");
        let i = 0;
        for(i = 0; i < 1000000000; i++){
            i += 1;
        }
        return i;
    }
    const total = sum();
    return <div>Total sum: {total}</div>
}


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

export default MemoParentComponent;