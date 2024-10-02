import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  name: string;
}

const Card: React.FC<CardProps> = ({ name }) => {
  return (
    <div className="card">
      <Link to={`/details/${name}`}>
        <h3>{name}</h3>
      </Link>
    </div>
  );
};

export default Card;
