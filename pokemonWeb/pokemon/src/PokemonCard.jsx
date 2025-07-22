export const PokemonCard = ({pokemon})=>{
    return (
        <li className="card">
        <img src={pokemon.image} alt={pokemon.name} />
        <h3>{pokemon.name}</h3>
        <p>ID: {pokemon.id}</p>
        <p>Types: {pokemon.types.join(', ')}</p>
        </li>
    );
}