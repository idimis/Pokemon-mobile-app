import React from 'react';

interface CardProps {
    name: string;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({ name, imageUrl }) => {
    return (
        <div 
            className="bg-white shadow-md rounded-lg p-2 m-1 text-center" 
            style={{ border: '1px solid #ccc', maxWidth: '150px', margin: '0 auto' }}
        >
            <img 
                src={imageUrl} 
                alt={name} 
                className="w-full h-24 object-cover" 
            />
            <h3 className="text-sm font-semibold mt-1">{name}</h3>
        </div>
    );
};

export default Card;
