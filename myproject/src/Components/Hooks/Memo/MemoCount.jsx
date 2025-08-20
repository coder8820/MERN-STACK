import { memo, useRef } from "react"

const Counts = () => {
    const renderCount = useRef(0);
    console.log(renderCount)
    return(
        <div className="mt-3">
            <p>Nothing changed but i have now renderd:
                <span className="text-red-600">{renderCount.current ++} time(s)</span>
            </p>
        </div>
    )
}

export default memo(Counts);