import { useEffect } from "react";
import "./index.css";
import { useState } from "react";
import { PokemonCard } from "./PokemonCard";

const Api = "https://pokeapi.co/api/v2/pokemon?limit=24";

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPokemon = async () => {
    try {
      const res = await fetch(Api);
      const data = await res.json();

      const detailedPokemonData = data.results.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url);
        const data = await res.json();
        return data;
      });
      const detailedResponse = await Promise.all(detailedPokemonData);
      setPokemon(detailedResponse);
      console.log(detailedResponse);
      setLoading(false);
    } catch (error) {
        setLoading(false);
        setError(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }

  if (error) {
    return <h2 className="error">Error: {error.message}</h2>;
  }

  return (
    <>
      <section className="container">
        <header>
          <h2>Lets Catch Pokemon</h2>
          <h2>Here are all Pokemon Cards</h2>
        </header>
        <div>
          <ul className="cards">
            {pokemon.map((curPokemon) => {
              return (
                <PokemonCard key={curPokemon.id} pokemonData={curPokemon} />
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};
