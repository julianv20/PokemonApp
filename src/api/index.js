import axios from 'axios';

export const getPokemons = async () => {
  const { data } = await axios.get(
    'https://pokeapi.co/api/v2/pokemon?limit=151'
  );
  return data.results;
};

export const getPokemonsDetails = async (pokemon) => {
  const { data } = await axios.get(pokemon.url);
  return data;
};
