import React from 'react';

interface SortMenuProps {
    onSort: (order: string) => void;
}

const SortMenu: React.FC<SortMenuProps> = ({ onSort }) => {
    return (
        <div className="flex justify-center mb-4">
            <select
                onChange={(e) => onSort(e.target.value)}
                className="border border-gray-300 rounded p-2"
            >
                <option value="asc">Sort by Name (A-Z)</option>
                <option value="desc">Sort by Name (Z-A)</option>
            </select>
        </div>
    );
};

export default SortMenu;
