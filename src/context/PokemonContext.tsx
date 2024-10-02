import { createContext, useContext } from 'react';

interface Pokemon {
    id: number;
    name: string;
    artworkFront: string; // Include any other properties as needed
}

interface PokemonContextType {
    pokemons: Pokemon[]; // Ensure 'pokemons' is defined here
    loading: boolean;
    error: string | null; // Add if needed
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
