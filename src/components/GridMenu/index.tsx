import React from 'react';

interface GridMenuProps {
    onGridView: () => void;
    onListView: () => void;
}

const GridMenu: React.FC<GridMenuProps> = ({ onGridView, onListView }) => {
    return (
        <div className="flex justify-center mb-4">
            <button onClick={onGridView} className="bg-blue-500 text-white py-2 px-4 rounded-l">
                Grid View
            </button>
            <button onClick={onListView} className="bg-blue-500 text-white py-2 px-4 rounded-r">
                List View
            </button>
        </div>
    );
};

export default GridMenu;
