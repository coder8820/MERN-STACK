import { useEffect } from "react";
import "./index.css";
import { useState } from "react";
import { PokemonCard } from "./PokemonCard";

const Api = "https://pokeapi.co/api/v2/pokemon?limit=24";

export const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = async () => {
    try {
      const res = await fetch(Api);
      const data = await res.json();
      // console.log(data.results);

      const detailedPokemonData = data.results.map(async(curPokemon) => {
        const res = await fetch(curPokemon.url)
        const pokemonData = await res.json();
        return {
          name: curPokemon.name,
          id: pokemonData.id,
          image: pokemonData.sprites.front_default,
          types: pokemonData.types.map(typeInfo => typeInfo.type.name),
        };
      });
      const detailedResponse = await Promise.all(detailedPokemonData);
      setPokemon(detailedResponse);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <>
      <section className="container">
      <header>
      <h2>Lets Catch Pokemon</h2>
      </header>
        <div>
            <ul className="cards">
                {
                    pokemon.map((curPokemon) =>{
                        return (
                            <PokemonCard key={curPokemon.id} pokemon={curPokemon}/>
                        )
                    })
                }
            </ul>
        </div>
      </section>
    </>
  );
};
