// src/store.ts
import { configureStore } from '@reduxjs/toolkit'; // Import from Redux Toolkit
import rootReducer from './reducers'; // Adjust the path based on your reducers

const store = configureStore({
    reducer: rootReducer,
    // You can add middleware or devTools options here if needed
});

export { store };
