import { useContext } from "react";
import { BioContext } from ".";

export const Home = () => {

    const { myname, age, profession,bio} = useContext(BioContext);
    return(
        <>
         <h1>Hello context api. My name is {myname}, age {age} and profession {profession}. Bio{bio}</h1>
        </>
    )
}