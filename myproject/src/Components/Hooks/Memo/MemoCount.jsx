import { memo, useRef, useState } from "react"

const Counts = ({bioData}) => {
    const renderCount = useRef(0);
    console.log(renderCount)
    return(
        <div className="mt-3">
            <p>Nothing changed but i have now renderd:
                <span className="text-red-600">{renderCount.current ++} time(s)</span>
            </p>
            <p>my name is: {bioData.name}</p>
            <p>My age: {bioData.age}</p>
            <p>Address {bioData.address}</p>
            <p>Profession: {bioData.profession}</p>
            <ChildMemo />
        </div>
    )
}

export default memo(Counts);


const ChildMemo = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold">Child Component Count:{count}</h2>
            <p>This component is memoized and will not re-render unless its props change.</p>
            <button className="bg-green-200 px-3 py-4" onClick={() => setCount(count + 1 )}>Increment</button><br />
            <button className="bg-red-400 py-5" onClick={() => setCount(count - 1 )}>Decrement</button>
        </div>
    )
}