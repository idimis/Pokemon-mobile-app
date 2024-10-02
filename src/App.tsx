// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PokeDetailPage from './pages/PokeDetailPage';
import Header from './components/Header'; // Import Header

const App: React.FC = () => {
    return (
        <Router>
            <Header /> {/* Include the header here for navigation */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pokemon/:name" element={<PokeDetailPage />} />
            </Routes>
        </Router>
    );
};

export default App;
