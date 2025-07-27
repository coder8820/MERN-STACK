export const PokemonCard = ({ pokemonData }) => {
  return (
    <li className="pokemon-card">
      <figure>
        <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      </figure>
      <figcaption>
        <h3>{pokemonData.name}</h3>
        <p>Height: {pokemonData.height / 10} m</p>
        <p>Weight: {pokemonData.weight / 10} kg</p>
        <p>Base Experience: {pokemonData.base_experience}</p>
      </figcaption>
    </li>
  );
};
