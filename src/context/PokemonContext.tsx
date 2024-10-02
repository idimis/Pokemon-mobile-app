// src/context/PokemonContext.tsx
import React, { createContext, useContext } from 'react';

interface Pokemon {
    id: number;
    name: string;
    artworkFront: string;
}

interface PokemonContextType {
    pokemonList: Pokemon[];
    loading: boolean;
    error: string | null;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const usePokemonContext = () => {
    const context = useContext(PokemonContext);
    if (!context) {
        throw new Error('usePokemonContext must be used within a PokemonProvider');
    }
    return context;
};

export default PokemonContext;
