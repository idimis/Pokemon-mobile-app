import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePokemonContext } from '../../context/PokemonContext';
import SortMenu from '../../components/SortMenu';
import GridMenu from '../../components/GridMenu';
import Card from '../../components/Card';
import logo from '../../assets/logo.png'; // Import the logo
import magnifier from '../../assets/magnifier.svg'; // Import the magnifier icon

const HomePage: React.FC = () => {
    const { pokemons, loading, error } = usePokemonContext();
    const [sortOrder, setSortOrder] = useState<string>('asc');
    const [view, setView] = useState<string>('single'); // Default view set to 'single'
    const [searchTerm, setSearchTerm] = useState<string>(''); // State for search term

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    // Sort Pokémon based on the sort order
    const sortedPokemons = [...pokemons].sort((a, b) => {
        if (sortOrder === 'asc') return a.name.localeCompare(b.name);
        return b.name.localeCompare(a.name);
    });

    // Filter Pokémon based on the search term
    const filteredPokemons = sortedPokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-2" style={{ backgroundColor: '#252A3E', minHeight: '100vh', maxWidth: '320px', margin: '0 auto' }}>
            <header className="flex items-center mb-1">
                <img src={logo} alt="Pokémon Logo" className="w-14 h-auto" /> {/* Logo di sisi kiri */}
                <div className="flex items-center border rounded px-1 ml-2"> {/* Search bar di samping logo */}
                    <input
                        type="text"
                        placeholder="Search"
                        className="p-1 text-black rounded text-sm" // Mengurangi padding dan menambahkan rounded
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <img src={magnifier} alt="Search" className="w-5 h-5 ml-1" /> {/* Ikon magnifier */}
                </div>
            </header>
            <div className="flex justify-between mb-1 items-center">
                <SortMenu onSort={setSortOrder} /> {/* Sort Menu di sisi kiri */}
                <GridMenu 
                    onSingleImageView={() => setView('single')} 
                    onTwoImagesView={() => setView('two')} 
                /> {/* Grid Menu di sisi kanan */}
            </div>
            <div className={`grid ${view === 'single' ? 'grid-cols-1' : 'grid-cols-2'} gap-1`}>
                {filteredPokemons.map((pokemon) => (
                    <Link 
                        key={pokemon.name} 
                        to={`/pokemon/${pokemon.name}`} 
                        className="border border-white rounded-lg p-2" // Frame putih untuk setiap Pokémon
                        style={{
                            backgroundColor: '#252A3E', // Keep the card background dark
                            overflow: 'hidden', // 
                        }}
                    >
                        <Card 
                            name={pokemon.name} 
                            imageUrl={pokemon.artworkFront} 
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
