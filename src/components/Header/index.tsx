import React from 'react';
import logo from './logo.png'; // Adjust the path if needed

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white p-4 text-center">
            <img src={logo} alt="Pokémon Logo" className="w-16 h-auto mx-auto" /> {/* Adjust width as needed */}
            
        </header>
    );
};

export default Header;
