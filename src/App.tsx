import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PokemonProvider } from './context/PokemonContext';
import HomePage from './pages/HomePage';
import PokeDetailPage from './pages/PokeDetailPage'; // Assuming you have this page

const App: React.FC = () => {
    return (
        <PokemonProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/pokemon/:name" element={<PokeDetailPage />} />
                    {/* Add other routes here */}
                </Routes>
            </Router>
        </PokemonProvider>
    );
};

export default App;
