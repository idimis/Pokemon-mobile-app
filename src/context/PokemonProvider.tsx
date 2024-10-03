import React, { createContext, useContext, useEffect, useState } from 'react';

interface Pokemon {
    name: string;
    id: number;
   
}

interface PokemonContextType {
    pokemons: Pokemon[];
    loading: boolean;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const usePokemonContext = (): PokemonContextType => {
    const context = useContext(PokemonContext);
    if (!context) {
        throw new Error('usePokemonContext must be used within a PokemonProvider');
    }
    return context;
};

export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await fetch('YOUR_API_URL_HERE'); 
                const data = await response.json();
                setPokemons(data); 
            } catch (error) {
                console.error('Error fetching Pokémon:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemons();
    }, []);


    useEffect(() => {
        console.log('Pokémons fetched:', pokemons);
    }, [pokemons]);

    return (
        <PokemonContext.Provider value={{ pokemons, loading }}>
            {children}
        </PokemonContext.Provider>
    );
};
