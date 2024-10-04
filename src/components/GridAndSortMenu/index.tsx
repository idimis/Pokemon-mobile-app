import React, { useState } from 'react';
import one_grid from '../../assets/one_grid.svg';
import two_grid from '../../assets/two_grid.svg';
import arrowDown from '../../assets/arrow_down.svg';

interface GridAndSortMenuProps {
    isSingleImageView: boolean;
    onToggleView: () => void;
    onSort: (order: string) => void;
}

const GridAndSortMenu: React.FC<GridAndSortMenuProps> = ({ isSingleImageView, onToggleView, onSort }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="flex items-center justify-between mb-4">
            <div className="relative">
                <div
                    className="flex items-center bg-gray-200 rounded p-2 w-52 cursor-pointer"
                    onClick={toggleDropdown}
                >
                    <span className="text-gray-400 mr-1">Sort by</span>
                    <img src={arrowDown} alt="Sort" className="w-4 h-4 text-gray-400" />
                </div>

                {isDropdownOpen && (
                    <div className="absolute mt-1 bg-white border border-gray-300 rounded shadow-lg w-full z-10">
                        <ul>
                            <li
                                onClick={() => {
                                    onSort('asc');
                                    toggleDropdown();
                                }}
                                className="p-2 hover:bg-gray-100 cursor-pointer"
                            >
                                Name (A-Z)
                            </li>
                            <li
                                onClick={() => {
                                    onSort('desc');
                                    toggleDropdown();
                                }}
                                className="p-2 hover:bg-gray-100 cursor-pointer"
                            >
                                Name (Z-A)
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            <div className="flex items-center ml-auto">
                <button
                    onClick={onToggleView}
                    className="text-white py-2 px-3 rounded text-sm flex items-center"
                >
                    <img
                        src={isSingleImageView ? one_grid : two_grid}
                        alt={isSingleImageView ? "Single View" : "Two Views"}
                        className="w-21 h-21 mr-1" // Ukuran gambar diperbesar 1.5x
                    />
                </button>
            </div>
        </div>
    );
};

export default GridAndSortMenu;
