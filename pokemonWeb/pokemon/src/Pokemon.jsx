import { useEffect } from "react";
import "./index.css";
import { useState } from "react";
import { PokemonCard } from "./PokemonCard";

const Api = "https://pokeapi.co/api/v2/pokemon?limit=200";

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

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
      console.log(detailedResponse)
      setLoading(false);
    } catch (error) {
        setLoading(false);
        setError(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const sarchData = pokemon.filter((curPokemon) => 
     curPokemon.name.toLowerCase().includes(search.toLowerCase())
);

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
          <h1>Let's Catch Pokemon</h1>
        </header>
        <div className="pokemon-search">
          <input
            type="text"
            placeholder="Search Pokemon"
            className="pokemon-search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="pokemon-search-button"></button>
        </div>
        <div>
          <ul className="cards">
            {sarchData.map((curPokemon) => {
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
