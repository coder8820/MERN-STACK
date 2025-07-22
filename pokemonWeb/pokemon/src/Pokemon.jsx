import { useEffect } from 'react'
import './index.css'


const Api = 'https://pokeapi.co/api/v2/pokemon?limit=24';
export const Pokemon = () => {

    const fetchPokemon = async () =>{
        try {
            const res = await fetch(Api);
            const data = await res.json();
            console.log(data.results);
        }
        catch (error){
            console.error("Error fetching Pokemon data:", error);
        }
    }


    useEffect(() => {
        fetchPokemon()
    }, [])


    return (
        <>
            <h2>Pokemon List</h2>
            
        </>
    )
}