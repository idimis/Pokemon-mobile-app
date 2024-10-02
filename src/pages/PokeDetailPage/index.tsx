import React from 'react';
import { useParams } from 'react-router-dom';
import usePokemonDetails from '../../hooks/usePokemonDetail';

interface PokemonDetails {
  id: number;
  name: string;
  artworkFront: string;
  health: number;
  attack: number;
  defense: number;
}

const PokemonDetails: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { pokemonDetails, loading, error } = usePokemonDetails(name || '');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading Pokémon details</div>;

  if (!pokemonDetails) return <div>No Pokémon details available</div>;

  return (
    <div style={{ color: '#fff', padding: '20px', backgroundColor: '#333' }}>
      <header>
        <img src="/assets/images/pokemon-logo.png" alt="Pokemon Logo" />
      </header>
      <div>
        <p>Serial Code: #{pokemonDetails.id}</p>
        <img src={pokemonDetails.artworkFront} alt={pokemonDetails.name} />
        <h2>{pokemonDetails.name}</h2>
        <div className="details-box" style={{ backgroundColor: '#000', padding: '10px' }}>
          <label>Health: </label>
          <input type="range" min="0" max="1000" value={pokemonDetails.health} readOnly />
          <p>Attack: {pokemonDetails.attack}</p>
          <p>Defense: {pokemonDetails.defense}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
