import { PokemonCard } from './PokemonCard';

export const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => (
        <PokemonCard
          {...pokemon}
          favorite={pokemon.favorite}
          key={pokemon.name}
        />
      ))}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
};
