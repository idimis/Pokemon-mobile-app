import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePokemonDetails from '../../hooks/usePokemonDetails';
import GridAndSortMenu from '../../components/GridAndSortMenu'; 
import Card from '../../components/Card';
import Header from '../../components/Header'; 

const HomePage: React.FC = () => {
    const [sortOrder, setSortOrder] = useState<string>('asc');
    const [isSingleImageView, setIsSingleImageView] = useState<boolean>(true);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const limit = 20; 
    const offset = 0; 
    const { pokemons, loading, error } = usePokemonDetails(limit, offset); 

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const sortedPokemons = [...pokemons].sort((a, b) => {
        if (sortOrder === 'asc') return a.name.localeCompare(b.name);
        return b.name.localeCompare(a.name);
    });

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
            <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> 

            <div className="flex justify-between mb-2 items-center">
                <GridAndSortMenu 
                    isSingleImageView={isSingleImageView} 
                    onToggleView={() => setIsSingleImageView(prev => !prev)} 
                    onSort={setSortOrder} 
                />
            </div>

            <div className={`grid ${isSingleImageView ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
                {filteredPokemons.map((pokemon) => (
                    <Link
                        key={pokemon.name}
                        to={`/pokemon/${pokemon.name}`}
                        className="border border-white rounded-lg p-2"
                        style={{ backgroundColor: '#252A3E', overflow: 'hidden' }} 
                    >
                        <Card name={pokemon.name} imageUrl={pokemon.artworkFront} code={pokemon.id.toString()} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
