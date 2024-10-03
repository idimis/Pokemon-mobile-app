import React from 'react';
import { useParams } from 'react-router-dom';
import usePokemonDetails from '../../hooks/usePokemonDetail';
import logo from '../../assets/logo.png'; // Adjust the path as necessary

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
    <div className="p-2" style={{ backgroundColor: '#252A3E', maxWidth: '320px', height: '568px', margin: '0 auto', overflowY: 'auto', borderRadius: '5px' }}>
      <header className="flex justify-center mb-2">
        <img src={logo} alt="Pokémon Logo" className="w-14 h-auto" /> {/* Logo */}
      </header>
      <div className="text-center mb-4">
        <p style={{ fontSize: '12px', color: '#fff' }}>Serial Code: #{pokemonDetails.id}</p> {/* Ukuran teks lebih kecil */}
        <div className="flex justify-center">
          <img src={pokemonDetails.artworkFront} alt={pokemonDetails.name} style={{ width: '80px', height: 'auto', border: '2px solid white', borderRadius: '5px', padding: '5px', backgroundColor: 'white' }} /> {/* Frame putih */}
        </div>
        <h2 className="text-lg font-bold" style={{ fontSize: '16px', color: '#fff' }}>{pokemonDetails.name}</h2> {/* Ukuran teks judul */}
      </div>
      <div className="details-box" style={{ backgroundColor: '#000', padding: '8px', borderRadius: '5px', fontSize: '12px', color: '#fff', marginBottom: '10px' }}> {/* Ukuran teks detail lebih kecil */}
        <label>Health: </label>
        <div style={{ marginBottom: '10px', width: '100%', borderRadius: '5px', overflow: 'hidden' }}>
          <div style={{ width: `${pokemonDetails.health / 10}%`, backgroundColor: '#4CAF50', height: '10px', borderRadius: '5px' }} /> {/* Health bar */}
        </div>
        <p style={{ margin: '0' }}>Attack: {pokemonDetails.attack}</p>
        <p style={{ margin: '0' }}>Defense: {pokemonDetails.defense}</p>
      </div>
    </div>
  );
};

export default PokemonDetails;
