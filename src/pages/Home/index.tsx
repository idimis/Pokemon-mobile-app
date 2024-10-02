import React, { useState } from 'react';
import Header from '../components/Header';
import SortMenu from '../components/SortMenu';
import GridMenu from '../components/GridMenu';
import useDebouncer from '../hooks/useDebouncer';

const Home = () => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebouncer(search, 300);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div style={{ backgroundColor: '#333', color: '#fff', height: '100vh', padding: '20px' }}>
      <Header />
      <div className="filter-container">
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={search}
          onChange={handleSearchChange}
        />
        <SortMenu />
      </div>
      <GridMenu />
    </div>
  );
};

export default Home;
