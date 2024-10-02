import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import SortMenu from '../../components/SortMenu';
import GridMenu from '../../components/GridMenu';
import { usePokemonContext } from '../../context/PokemonContext';

const HomePage: React.FC = () => {
    const { pokemons, loading } = usePokemonContext(); // Ambil data dari context
    const [sortOrder, setSortOrder] = useState<string>('asc');
    const [view, setView] = useState<string>('grid');

    // Sort Pokémon based on the selected order
    const sortedPokemons = [...pokemons].sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        return sortOrder === 'asc' ? (nameA > nameB ? 1 : -1) : (nameA < nameB ? 1 : -1);
    });

    const handleSort = (order: string) => {
        setSortOrder(order);
    };

    const handleGridView = () => {
        setView('grid');
    };

    const handleListView = () => {
        setView('list');
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Pokémon List</h2>
            <SortMenu onSort={handleSort} />
            <GridMenu onGridView={handleGridView} onListView={handleListView} />
            <div className={`grid ${view === 'grid' ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1'}`}>
                {sortedPokemons.map((pokemon) => (
                    <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
                        <Card name={pokemon.name} imageUrl={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
