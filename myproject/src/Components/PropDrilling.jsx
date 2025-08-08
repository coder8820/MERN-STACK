import './/Hooks/useEffect/index.css';
export const ParentComponent = () => {
    return (
        <section
         className={'p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-gray-900 text-white'}
        >
            <h1>I am Grand Parent</h1>
            <ChildComponent data='this is React js propDrilling method'/>
        </section>
    )
}

const ChildComponent = (props) => {
    return (
        <div className={'p-4 bg-gray-800 rounded-lg text-green-500'}>
            <h1>I am Parent</h1>
            <p>Prop Drilling Example</p>
            <GrandChildComponent data={props.data} />
        </div>
    )
}

const GrandChildComponent = (props) => {
    return(
        <div className={'p-4 bg-gray-700 rounded-lg text-red-500'}>
            <h1>I am Child do you know that</h1>
            <p>Prop Drilling Example</p>
            <p>Data recived from Parent: {props.data}</p>
        </div>
    )
}