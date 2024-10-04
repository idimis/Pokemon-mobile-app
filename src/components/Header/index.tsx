import React from 'react';
import logo from '../../assets/logo.png'; 
import magnifier from '../../assets/magnifier.svg';

const Header: React.FC<{ searchTerm: string; setSearchTerm: (term: string) => void }> = ({ searchTerm, setSearchTerm }) => {
    return (
        <header className="bg-[#252A3E] text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
                <img src={logo} alt="Pokémon Logo" className="w-24 h-auto" />
            </div>
            <div className="flex items-center border rounded px-1">
                <input
                    type="text"
                    placeholder="Search"
                    className="p-1 text-black rounded text-sm w-32" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img src={magnifier} alt="Search" className="w-5 h-5 ml-1" />
            </div>
        </header>
    );
};

export default Header;
