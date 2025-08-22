import { memo, useMemo, useState } from "react"


const ExpensiveComponent = () => {
    const sum = ()=>{
        console.log("Calculating sum...");
        let i = 0;
        for(i = 0; i < 1000000000; i++){
            i += 1;
        }
        return i;
    }
    const total = useMemo(() => sum(), []);
    return <div>Total sum: {total}</div>
}


const MemoParentComponent = () =>{

    const [count, setCount] = useState(0)

    return(
        <>
            <div className="p-4 h-lvh fond-display flex flex-col justify-center items-center tracking-wider bg-yellow-700">
                <ExpensiveComponent />
                <button
                onClick={() => setCount(count + 1)}
                className="bg-blue-500 text-white px-4 py-4 rounded-md" 
                >Re-render Parent</button>
                <p>Parent re-render counts: {count}</p>
            </div>
        </>
    )
}

export default memo(MemoParentComponent);