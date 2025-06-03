import './EV.css'

export const EventPropagation = () => {

    const handleGrandParent = (e) => {
        e.stopPropagation(); // Prevents the event from bubbling up to the parent
        console.log("Grandparent clicked");
    }

    const handleParentClick = (e) => {
        e.stopPropagation(); // Prevents the event from bubbling up to the grandparent
        console.log("Parent clicked");
    }

    const handleChildClick = (e) => {
        e.stopPropagation(); // Prevents the event from bubbling up to the parent and grandparent
        console.log("Child clicked");
    }

    return(
        <section className="main-div">
            <div className="g-div" onClick={handleGrandParent}>
                <div className="p-div" onClick={handleParentClick}>
                    <button className="c-div" onClick={handleChildClick}>
                        Click Me 
                    </button>
                </div>
            </div>
        </section>
    )
}