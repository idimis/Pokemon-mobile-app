import React from 'react';

interface CardProps {
    name: string;
    imageUrl: string;
    code: string; // Keep this as string for now
    type: string; // Ensure this matches the expected type
}

const Card: React.FC<CardProps> = ({ name, imageUrl, code, type }) => {
    return (
        <div 
            className="shadow-md rounded-lg text-center relative" 
            style={{ 
                maxWidth: '180px', 
                margin: '10px auto', // Menambahkan margin untuk jeda antar frame
                backgroundColor: '#F0F3FF', // Mengganti latar belakang
                padding: '10px',
                borderRadius: '10px', // Membuat pinggiran melengkung
            }} 
        >
            <span className="absolute top-2 right-2 text-xs font-bold text-gray-700">{code}</span> {/* Kode Pokémon di kanan atas */}
            <img 
                src={imageUrl} 
                alt={name} 
                style={{ 
                    width: '100px', 
                    height: '100px', 
                    display: 'block', 
                    margin: '0 auto' 
                }} // Gambar bulat tanpa border putih
            />
            <h3 className="text-sm font-semibold mt-1">{name}</h3>
            <span className="text-xs text-gray-500">{type}</span> {/* Elemen jenis Pokémon */}
        </div>
    );
};

export default Card;
