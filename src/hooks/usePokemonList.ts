// src/hooks/usePokemonList.ts
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Pokemon {
    id: number;
    name: string;
    artworkFront: string;
}

const usePokemonList = (limit: number, offset: number) => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPokemons = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
                const pokemonData = await Promise.all(
                    response.data.results.map(async (pokemon: any, index: number) => {
                        const details = await axios.get(pokemon.url);
                        return {
                            id: details.data.id,
                            name: details.data.name,
                            artworkFront: details.data.sprites.front_default,
                        };
                    })
                );
                setPokemons(pokemonData);
            } catch (err) {
                setError('Failed to fetch Pokémon data.');
            } finally {
                setLoading(false);
            }
        };

        fetchPokemons();
    }, [limit, offset]);

    return { pokemons, loading, error };
};

export { usePokemonList };
