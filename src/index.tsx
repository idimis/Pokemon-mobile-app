// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store'; // Adjust according to your store setup
import { PokemonProvider } from './context/PokemonProvider';
import HomePage from './pages/HomePage';
import PokeDetailPage from './pages/PokeDetailPage';
import Header from './components/Header';
import './styles/GlobalStyles.ts';

ReactDOM.render(
    <Provider store={store}>
        <PokemonProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/pokemon/:name" element={<PokeDetailPage />} />
                </Routes>
            </Router>
        </PokemonProvider>
    </Provider>,
    document.getElementById('root')
);
