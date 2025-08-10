import { BioContext, useBioContext } from ".";

export const Home = () => {

    const { myname, age, profession,bio} = useBioContext();
    return(
        <>
         <h1>Hello context api. My name is {myname}, age {age} and profession {profession}. Bio{bio}</h1>
        </>
    )
}