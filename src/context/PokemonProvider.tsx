import React, { createContext, useContext, useState, useEffect } from 'react';

interface Pokemon {
    id: number;
    name: string;
    // Add other properties as needed
}

interface PokemonContextProps {
    pokemons: Pokemon[]; // Make sure this matches the context type
    loading: boolean;
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
    const [pokemons, setPokemons] = useState<Pokemon[]>([]); // Initialize pokemons state
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
                const data = await response.json();
                setPokemons(data.results.map((pokemon: any) => ({ 
                    id: pokemon.id, // Ensure this is the right mapping
                    name: pokemon.name,
                    artworkFront: pokemon.sprites.front_default // Example for artwork
                }))); 
            } catch (error) {
                console.error('Error fetching Pokémon:', error);
            } finally {
                setLoading(false);
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
