

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PokemonProvider } from './context/PokemonContext';
import HomePage from './pages/HomePage';
import PokeDetailPage from './pages/PokeDetailPage';
import './index.css';


const App: React.FC = () => {
    return (
        <PokemonProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/pokemon/:name" element={<PokeDetailPage />} />
                </Routes>
            </Router>
        </PokemonProvider>
    );
};

export default App;
