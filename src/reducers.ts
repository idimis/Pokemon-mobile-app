
import { combineReducers } from 'redux';


const initialState = {
    pokemons: [],
    loading: false,
};

const pokemonReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'FETCH_POKEMONS':
            return { ...state, pokemons: action.payload, loading: false };
        case 'LOADING':
            return { ...state, loading: true };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    pokemon: pokemonReducer,
    
});

export default rootReducer;
