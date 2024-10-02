// src/context/PokemonProvider.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define a type for your Pokémon data
interface Pokemon {
    id: number;
    name: string;
    // Add other properties as needed
}

interface PokemonContextProps {
    pokemons: Pokemon[]; // Adjust according to your data structure
    loading: boolean;
    // Add other context properties or methods as needed
}

const PokemonContext = createContext<PokemonContextProps | undefined>(undefined);

export const usePokemonContext = () => {
    const context = useContext(PokemonContext);
    if (!context) {
        throw new Error("usePokemonContext must be used within a PokemonProvider");
    }
    return context;
};

export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]); // Adjust initial state
    const [loading, setLoading] = useState<boolean>(true); // Example loading state

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                // Replace with your actual API call
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
                const data = await response.json();
                setPokemons(data.results); // Adjust according to your data structure
            } catch (error) {
                console.error('Error fetching Pokémon:', error);
            } finally {
                setLoading(false); // Set loading to false after fetching data
            }
        };

        fetchPokemons();
    }, []);

    return (
        <PokemonContext.Provider value={{ pokemons, loading }}>
            {children}
        </PokemonContext.Provider>
    );
};
