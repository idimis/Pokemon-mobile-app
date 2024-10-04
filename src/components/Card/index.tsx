import React from 'react';

interface CardProps {
    name: string;
    imageUrl: string;
    code: string; 
    type: string; 
}

const Card: React.FC<CardProps> = ({ name, imageUrl, code, type }) => {
    return (
        <div 
            className="shadow-md rounded-lg text-center relative" 
            style={{ 
                maxWidth: '180px', 
                margin: '10px auto', 
                backgroundColor: '#F0F3FF', 
                padding: '10px',
                borderRadius: '10px', 
            }} 
        >
            <span className="absolute top-2 right-2 text-xs font-bold text-gray-700">{code}</span> 
            <img 
                src={imageUrl} 
                alt={name} 
                style={{ 
                    width: '100px', 
                    height: '100px', 
                    display: 'block', 
                    margin: '0 auto' 
                }} 
            />
            <h3 className="text-sm font-semibold mt-1">{name}</h3>
            <span className="text-xs text-gray-500">{type}</span> 
        </div>
    );
};

export default Card;
