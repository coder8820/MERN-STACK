export const ParentComponent = () => {
    return (
        <section
         className={'p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-gray-900 text-white'}
        >
            <h1>I am Grand Parent</h1>
            <ChildComponent />
        </section>
    )
}

const ChildComponent = () => {
    return (
        <div>
            <h1>I am Parent</h1>
            <GrandChildComponent />
        </div>
    )
}

const GrandChildComponent = () => {
    return(
        <div>
            <h1>I am Child</h1>
            <p>Prop Drilling Example</p>
        </div>
    )
}