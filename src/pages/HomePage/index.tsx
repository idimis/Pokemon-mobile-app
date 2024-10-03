// src/pages/HomePage/index.tsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Pastikan ini diimpor jika menggunakan Link
import { usePokemonContext } from '../../context/PokemonContext'; // Ganti dengan path yang benar
import SortMenu from '../../components/SortMenu'; // Ganti dengan path yang benar
import GridMenu from '../../components/GridMenu'; // Ganti dengan path yang benar
import Card from '../../components/Card'; // Ganti dengan path yang benar

const HomePage: React.FC = () => {
    const { pokemons, loading } = usePokemonContext(); 
    const [sortOrder, setSortOrder] = useState<string>('asc');
    const [view, setView] = useState<string>('grid');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        console.log('Pokémons fetched:', pokemons);
    }, [pokemons]);

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
    if (error) return <div>Error: {error}</div>;

    // Assuming sortedPokemons is derived from pokemons based on sortOrder
    const sortedPokemons = [...pokemons].sort((a, b) => {
        if (sortOrder === 'asc') return a.name.localeCompare(b.name);
        return b.name.localeCompare(a.name);
    });

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Pokémon List</h2>
            <SortMenu onSort={handleSort} />
            <GridMenu onGridView={handleGridView} onListView={handleListView} />
            <div className={`grid ${view === 'grid' ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1'}`}>
                {sortedPokemons.map((pokemon) => (
                    <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
                        <Card name={pokemon.name} imageUrl={pokemon.artworkFront} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

// Pastikan untuk mengekspor default
export default HomePage;
