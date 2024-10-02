import React from 'react';
import './styles.css';
import Logo from '../assets/logo'; // Assuming Logo is an image file imported properly

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Pokemon Logo" className="header-logo" />
      <h1 className="header-title">Pokemon App</h1>
    </header>
  );
};

export default Header;
