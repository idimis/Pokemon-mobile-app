import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchPokemons } from '../api/pokemonAPI'; // Import your API functions

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemonsData = async () => {
            try {
                const data = await fetchPokemons();
                setPokemons(data);
            } catch (error) {
                console.error('Error fetching Pokémon:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemonsData();
    }, []);

    return (
        <PokemonContext.Provider value={{ pokemons, loading }}>
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
