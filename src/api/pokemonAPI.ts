import axios from 'axios';

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemons = async (limit: number = 10, offset: number = 0) => {
    const response = await axios.get(`${POKEAPI_BASE_URL}?limit=${limit}&offset=${offset}`);
    const pokemonList = response.data.results;

    const detailedPokemons = await Promise.all(pokemonList.map(async (pokemon: { name: string }) => {
        const detailResponse = await fetchPokemonDetail(pokemon.name);
        return {
            id: detailResponse.id,
            name: detailResponse.name,
            artworkFront: detailResponse.sprites.front_default, 
        };
    }));

    return detailedPokemons;
};

export const fetchPokemonDetail = async (name: string) => {
    const response = await axios.get(`${POKEAPI_BASE_URL}/${name}`);
    return response.data;
};
