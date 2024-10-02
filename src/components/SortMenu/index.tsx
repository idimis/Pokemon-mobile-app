import React from 'react';

const SortMenu = () => {
  return (
    <div className="sort-menu">
      <label htmlFor="sort">Sort by: </label>
      <select id="sort" name="sort">
        <option value="name">Name</option>
        <option value="id">ID</option>
      </select>
    </div>
  );
};

export default SortMenu;
