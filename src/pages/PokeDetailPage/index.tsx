import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import usePokemonDetails from '../../hooks/usePokemonDetails';
import logo from '../../assets/logo.png';

const PokemonDetails: React.FC = () => {
    const { name } = useParams<{ name: string }>();
    const { pokemonDetails, loading, error, fetchPokemonDetails } = usePokemonDetails(20, 0);

    useEffect(() => {
        if (name) {
            fetchPokemonDetails(name);
        }
    }, [name, fetchPokemonDetails]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading Pokémon details</div>;
    if (!pokemonDetails) return <div>No Pokémon details available</div>;

    return (
        <div 
            className="p-2 flex flex-col items-center" 
            style={{ 
                backgroundColor: '#252A3E', 
                minHeight: '100vh', 
                maxWidth: '320px', 
                height: '568px', 
                margin: '0 auto', 
                overflowY: 'auto', 
                borderRadius: '5px' 
            }}
        >
            <header className="flex justify-start mb-2">
                <img src={logo} alt="Pokémon Logo" className="w-24 h-auto" /> 
            </header>
            <div className="text-center mb-4 flex-grow flex flex-col items-center">
                <p className="text-lg text-white">Serial Code: #{pokemonDetails.id}</p>
                <div className="flex justify-center mb-2">
                    <img 
                        src={pokemonDetails.artworkFront} 
                        alt={pokemonDetails.name} 
                        className="w-48 h-auto" 
                    />
                </div>
                <div className="flex items-center mb-2">
                    <h2 className="text-2xl font-bold text-white mr-2">{pokemonDetails.name}</h2>
                    <img 
                        src={pokemonDetails.artworkFront} 
                        alt={pokemonDetails.name} 
                        className="w-16 h-auto border-2 border-white rounded" 
                    />
                </div>
            </div>
            
            <div className="details-box bg-black p-2 rounded mb-4 w-full">
                <label className="text-lg text-white">Health:</label>
                <div className="relative w-full h-3 bg-gray-300 rounded overflow-hidden mb-1">
                    <div className="absolute top-0 left-0 h-full bg-green-500" style={{ width: `${pokemonDetails.health / 10}%` }} />
                </div>
                <p className="text-white text-sm">{pokemonDetails.health} from 1000</p>
                <hr className="border-gray-400 my-2" /> 
                <div className="flex justify-between text-white text-lg mb-1">
                    <span>Attack</span>
                    <span>Defense</span>
                </div>
                <div className="flex justify-between text-white text-lg">
                    <span>{pokemonDetails.attack}</span>
                    <span>{pokemonDetails.defense}</span>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetails;
