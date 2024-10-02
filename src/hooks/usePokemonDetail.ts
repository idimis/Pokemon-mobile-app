import { useEffect, useState } from 'react';
import { fetchPokemonDetail } from '../api/pokemonAPI';

const usePokemonDetail = (name: string) => {
    const [pokemon, setPokemon] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getPokemonDetail = async () => {
            try {
                const data = await fetchPokemonDetail(name);
                setPokemon(data);
            } catch (err) {
                setError('Failed to fetch Pokémon details');
            } finally {
                setLoading(false);
            }
        };

        getPokemonDetail();
    }, [name]);

    return { pokemon, loading, error };
};

export default usePokemonDetail;
