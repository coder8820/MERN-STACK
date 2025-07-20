import { useEffect, useState } from "react";
import "./Pokemon.css";

export const HowToFetchApi = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon/squirtle";
  const fetchPokemon = async () => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (loading) {
    // Show a loading state while fetching data
    return (
      <section className="container effect-container">
        <header>
          <h1>Loading...</h1>
        </header>
      </section>
    );
  }

  if (error) {
    // Show an error message if the fetch fails
    return (
      <section className="container effect-container">
        <header>
          <h1>Error: {error.message}</h1>
        </header>
      </section>
    );
  }

  if (apiData) {
    return (
      <section className="container effect-container">
        <header>
          <h1>Let's catch Pokemon</h1>
        </header>
        <ul className="card-demo">
          <li className="pokemon-card">
            <figure>
              <img
                src={apiData.sprites.other.dream_world.front_default}
                alt={apiData.name}
                className="pokemon-image"
              />
            </figure>
            <p className="apiname">{apiData.name}</p>
            <div className="grid-three-cols">
              <p className="pokemon-info">
                <span>Height:</span> {apiData.height}
              </p>
              <p className="pokemon-info">
                <span>Weight:</span> {apiData.weight}
              </p>
              <p className="pokemon-info">
                <span>Base Experience:</span> {apiData.base_experience}
              </p>
            </div>
          </li>
        </ul>
      </section>
    );
  }
};
