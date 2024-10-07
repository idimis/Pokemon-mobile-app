import { useEffect, useState } from 'react';
import axios from 'axios';

interface Pokemon {
    id: number;
    name: string;
    artworkFront: string;
}

interface PokemonDetails extends Pokemon {
    health: number;
    attack: number;
    defense: number;
    spriteFront: string;
}

const usePokemonDetails = (limit: number, offset: number) => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [fetchingDetails, setFetchingDetails] = useState<boolean>(false); 

    useEffect(() => {
        const fetchPokemons = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
                const pokemonData = await Promise.all(
                    response.data.results.map(async (pokemon: any) => {
                        const details = await axios.get(pokemon.url);
                        return {
                            id: details.data.id,
                            name: details.data.name,
                            artworkFront: details.data.sprites.other['official-artwork'].front_default,
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

    const fetchPokemonDetails = async (pokemonName: string) => {
        if (fetchingDetails) return;
        if (pokemonDetails && pokemonDetails.name === pokemonName) return;

        setFetchingDetails(true); 
        setLoading(true);
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            if (!response.ok) {
                throw new Error('Failed to fetch Pokémon details.');
            }
            const data = await response.json();
            const spriteFront = data.sprites.front_default;
            const artworkFront = data.sprites.other['official-artwork'].front_default;
            const { name, id } = data;
            const health = data.stats.find((stat: any) => stat.stat.name === 'hp').base_stat;
            const attack = data.stats.find((stat: any) => stat.stat.name === 'attack').base_stat;
            const defense = data.stats.find((stat: any) => stat.stat.name === 'defense').base_stat;

            setPokemonDetails({ name, id, health, attack, defense, spriteFront, artworkFront });
        } catch (error) {
            setError('Failed to fetch Pokémon details.');
        } finally {
            setFetchingDetails(false); 
            setLoading(false);
        }
    };

    return { pokemons, pokemonDetails, fetchPokemonDetails, loading, error };
};

export default usePokemonDetails;
