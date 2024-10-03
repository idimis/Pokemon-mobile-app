import React, { useState } from 'react';
import oneGrid from '../../assets/one_grid.svg'; // Import gambar one grid
import twoGrid from '../../assets/two_grid.svg'; // Import gambar two grid

interface GridMenuProps {
    onSingleImageView: () => void; // Function for single image view
    onTwoImagesView: () => void;    // Function for two images view
}

const GridMenu: React.FC<GridMenuProps> = ({ onSingleImageView, onTwoImagesView }) => {
    const [activeView, setActiveView] = useState<'single' | 'two'>('single'); // Track active view

    const handleSingleView = () => {
        setActiveView('single');  // Set the active view to single
        onSingleImageView();      // Call the single image view function
    };

    const handleTwoView = () => {
        setActiveView('two');     // Set the active view to two
        onTwoImagesView();        // Call the two images view function
    };

    return (
        <div className="flex items-center mb-2">
            <button 
                onClick={handleSingleView} 
                className={`bg-blue-500 text-white py-2 px-3 rounded-l text-sm flex items-center ${activeView === 'single' ? 'opacity-100' : 'opacity-50'}`}
            >
                <img src={oneGrid} alt="Single View" className="w-4 h-4 mr-1" /> {/* Gambar one grid */}
                
            </button>
            <button 
                onClick={handleTwoView} 
                className={`bg-blue-500 text-white py-2 px-3 rounded-r text-sm flex items-center ${activeView === 'two' ? 'opacity-100' : 'opacity-50'}`}
            >
                <img src={twoGrid} alt="Two Views" className="w-4 h-4 mr-1" /> {/* Gambar two grid */}
                
            </button>
        </div>
    );
};

export default GridMenu;
