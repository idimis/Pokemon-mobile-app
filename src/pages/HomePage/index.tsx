import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePokemonContext } from '../../context/PokemonContext';
import SortMenu from '../../components/SortMenu';
import GridMenu from '../../components/GridMenu';
import Card from '../../components/Card';
import logo from '../../assets/logo.png';
import magnifier from '../../assets/magnifier.svg';

const HomePage: React.FC = () => {
    const { pokemons, loading, error } = usePokemonContext();
    const [sortOrder, setSortOrder] = useState<string>('asc');
    const [isSingleImageView, setIsSingleImageView] = useState<boolean>(true);
    const [searchTerm, setSearchTerm] = useState<string>('');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    // Sort Pokémon berdasarkan urutan
    const sortedPokemons = [...pokemons].sort((a, b) => {
        if (sortOrder === 'asc') return a.name.localeCompare(b.name);
        return b.name.localeCompare(a.name);
    });

    // Filter Pokémon berdasarkan istilah pencarian
    const filteredPokemons = sortedPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div
            className="p-2"
            style={{
                backgroundColor: '#252A3E',
                minHeight: '100vh',
                maxWidth: '320px',
                margin: '0 auto',
            }}
        >
            <header className="flex items-center mb-2">
                <img src={logo} alt="Pokémon Logo" className="w-14 h-auto" />
                <div className="flex items-center border rounded px-1 ml-2">
                    <input
                        type="text"
                        placeholder="Search"
                        className="p-1 text-black rounded text-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <img src={magnifier} alt="Search" className="w-5 h-5 ml-1" />
                </div>
            </header>

            {/* Flex container untuk SortMenu dan GridMenu */}
            <div className="flex justify-between mb-2 items-center">
                <SortMenu onSort={setSortOrder} />
                <GridMenu 
                    isSingleImageView={isSingleImageView} 
                    onToggleView={() => setIsSingleImageView(prev => !prev)} 
                />
            </div>

            {/* Grid untuk Pokémon */}
            <div className={`grid ${isSingleImageView ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
                {filteredPokemons.map((pokemon) => (
                    <Link
                        key={pokemon.name}
                        to={`/pokemon/${pokemon.name}`}
                        className="border border-white rounded-lg p-2"
                        style={{ backgroundColor: '#252A3E', overflow: 'hidden' }} // Latar belakang gelap untuk kartu
                    >
                        <Card name={pokemon.name} imageUrl={pokemon.artworkFront} code={pokemon.id.toString()} />

                        
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
