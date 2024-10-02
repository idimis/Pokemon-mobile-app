// PokemonContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

interface Pokemon {
    name: string;
    // Add other properties as necessary
}

interface PokemonContextType {
    pokemons: Pokemon[];
    loading: boolean;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemons = async () => {
            setLoading(true);
            // Fetch your Pokémon data here
            const response = await fetch('your-api-url');
            const data = await response.json();
            setPokemons(data.results); // Adjust according to your API response
            setLoading(false);
        };

        fetchPokemons();
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
