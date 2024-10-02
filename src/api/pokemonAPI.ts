import axios from 'axios';

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemons = async (limit: number = 10, offset: number = 0) => {
    const response = await axios.get(`${POKEAPI_BASE_URL}?limit=${limit}&offset=${offset}`);
    return response.data.results;
};

export const fetchPokemonDetail = async (name: string) => {
    const response = await axios.get(`${POKEAPI_BASE_URL}/${name}`);
    return response.data;
};
