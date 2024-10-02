import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePokemonList } from '../../hooks/usePokemonList'; // Adjusted import path
import Card from '../../components/Card';                   // Adjusted import path
import SortMenu from '../../components/SortMenu';           // Adjusted import path
import GridMenu from '../../components/GridMenu';           // Adjusted import path
import { usePokemonContext } from '../../context/PokemonContext';

const HomePage: React.FC = () => {
    const { view, setView } = usePokemonContext();
    const [sortOrder, setSortOrder] = useState<string>('asc');
    const [offset, setOffset] = useState(0);
    const { pokemons, loading, error } = usePokemonList(10, offset);

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
    if (error) return <div>{error}</div>;

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
