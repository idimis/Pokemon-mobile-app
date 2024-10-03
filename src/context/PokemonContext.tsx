import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchPokemons } from '../api/pokemonAPI'; 

interface Pokemon {
    id: number;
    name: string;
    artworkFront: string;
}

interface PokemonContextType {
    pokemons: Pokemon[];
    loading: boolean;
    error: string | null; 
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null); 
    useEffect(() => {
        const fetchPokemonsData = async () => {
            try {
                const data = await fetchPokemons();
                setPokemons(data);
            } catch (error) {
                setError('Failed to fetch Pokémon.'); 
                console.error('Error fetching Pokémon:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemonsData();
    }, []);

    return (
        <PokemonContext.Provider value={{ pokemons, loading, error }}>
            {children}
        </PokemonContext.Provider>
    );
};

export const usePokemonContext = (): PokemonContextType => {
    const context = useContext(PokemonContext);
    if (context === undefined) {
        throw new Error('usePokemonContext must be used within a PokemonProvider');
    }
    return context;
};
