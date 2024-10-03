import React from 'react';
import arrowDown from '../../assets/arrow_down.svg'; 

interface SortMenuProps {
    onSort: (order: string) => void;
}

const SortMenu: React.FC<SortMenuProps> = ({ onSort }) => {
    return (
        <div className="flex items-center mb-4">
            <span className="mr-2">Sort by:</span> {/* Teks "Sort by" */}
            <select
                onChange={(e) => onSort(e.target.value)}
                className="border border-gray-300 rounded p-2 text-sm"
            >
                <option value="asc">Name (A-Z)</option>
                <option value="desc">Name (Z-A)</option>
            </select>
            <img src={arrowDown} alt="Sort" className="w-4 h-4 ml-1" /> 
        </div>
    );
};

export default SortMenu;
