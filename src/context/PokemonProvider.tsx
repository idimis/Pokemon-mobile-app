// src/context/PokemonProvider.tsx
import React, { ReactNode, useEffect, useState } from 'react';
import axios from 'axios';
import PokemonContext from './PokemonContext';

interface Pokemon {
    id: number;
    name: string;
    artworkFront: string;
}

interface PokemonProviderProps {
    children: ReactNode;
}

const PokemonProvider: React.FC<PokemonProviderProps> = ({ children }) => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPokemonList = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
                const pokemonData = response.data.results.map((pokemon: any, index: number) => ({
                    id: index + 1,
                    name: pokemon.name,
                    artworkFront: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
                }));
                setPokemonList(pokemonData);
            } catch (err) {
                setError('Failed to load Pokémon list');
            } finally {
                setLoading(false);
            }
        };

        fetchPokemonList();
    }, []);

    return (
        <PokemonContext.Provider value={{ pokemonList, loading, error }}>
            {children}
        </PokemonContext.Provider>
    );
};

export default PokemonProvider;
