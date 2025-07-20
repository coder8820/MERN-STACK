import { useEffect, useState } from "react";
import "./Pokemon.css";

export const HowToFetchApi = () => {
  const [apiData, setApiData] = useState(null);

  const API = "https://pokeapi.co/api/v2/pokemon/squirtle"
  const fetchPokemon = async() => {
   fetch(API)
    .then((response) => response.json())
    .then((data) => { setApiData(data); })
    .catch((error) => console.error("Error fetching data:", error));
  }

  useEffect(() => {
    fetchPokemon();   
  }, []);

  console.log(apiData);
  if(!apiData) {
    return (
      <section className="container effect-container">
        <header>
          <h1>Loading...</h1>
        </header>
      </section>
    );
  }
  if(apiData){
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
          <p>name:{apiData.name}</p>
        </li>
      </ul>
    </section>
  );
}};
