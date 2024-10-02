import React from 'react';
import Card from './Card';
import usePokemonList from '../hooks/usePokemonList';

const GridMenu = () => {
  const { pokemonList, loading, error } = usePokemonList();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading Pokémon</div>;

  return (
    <div className="grid-menu">
      {pokemonList.map((pokemon) => (
        <Card key={pokemon.name} name={pokemon.name} />
      ))}
    </div>
  );
};

export default GridMenu;
