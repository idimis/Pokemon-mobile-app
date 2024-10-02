// src/components/Card/index.tsx
import React from 'react';

interface CardProps {
    name: string;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({ name, imageUrl }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-2 text-center">
            <img src={imageUrl} alt={name} className="w-full h-32 object-cover" />
            <h3 className="text-lg font-semibold mt-2">{name}</h3>
        </div>
    );
};

export default Card;
