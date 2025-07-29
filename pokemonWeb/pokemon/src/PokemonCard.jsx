export const PokemonCard = ({ pokemonData }) => {
  return (
    <li className="pokemon-card">
      <figure>
        <img
          className="pokemon-image"
          src={pokemonData.sprites.front_default}
          alt={pokemonData.name}
        />
      </figure>
      <figcaption>
        <h3 className="pokemon-name">{pokemonData.name}</h3>
        <div className="pokemon-info pokemon-highlight">
          <p>{pokemonData.types.map(type => type.type.name).join(", ")}</p>         
        </div>
        <div className="grid-three-cols">
          <p className="pokemon-info">
            <span>Height:{pokemonData.height}</span>
          </p>
          <p className="pokemon-info">
            <span>Weight:{pokemonData.weight}</span>
          </p>
          <p className="pokemon-ingo">
            <span>speed: {pokemonData.stats[5].base_stat}</span>
          </p>
          <p className="pokemon-info">
            <span>Experience:{pokemonData.base_experience}</span>
          </p>
          <p className="pokemon-info">
            <span>Attack:{pokemonData.stats[1].base_stat}</span>
          </p>
          <p className="pokemon-ingo">
            <span>{pokemonData.abilities.map(abi => abi.ability.name).slice(0,1).join(', ')}</span>
          </p>
        </div>
      </figcaption>
    </li>
  );
};
