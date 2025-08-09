import { useContext } from "react";
import { BioContext } from ".";

export const About = () => {

    const { myname, age, profession} = useContext(BioContext);
    return(
        <>
         <h1>This is about page Data. My name is {myname}, age {age} and profession {profession}</h1>
        </>
    )
}