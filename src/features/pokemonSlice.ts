import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonState {
    pokemons: any[];
}

const initialState: PokemonState = {
    pokemons: [],
};

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemons: (state, action: PayloadAction<any[]>) => {
            state.pokemons = action.payload;
        },
    },
});

export const { setPokemons } = pokemonSlice.actions;
export default pokemonSlice.reducer;
