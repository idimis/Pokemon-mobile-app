
import one_grid from '../../assets/one_grid.svg'; // Import gambar one grid
import two_grid from '../../assets/two_grid.svg'; // Import gambar two grid

interface GridMenuProps {
    isSingleImageView: boolean; // State untuk mengetahui tampilan saat ini
    onToggleView: () => void; // Function to toggle between views
}

const GridMenu: React.FC<GridMenuProps> = ({ isSingleImageView, onToggleView }) => {
    return (
        <div className="flex items-center mb-2">
            <button
                onClick={onToggleView}
                className={`${
                    isSingleImageView ? 'bg-blue-600' : 'bg-blue-500'
                } text-white py-2 px-3 rounded text-sm flex items-center`}
            >
                <img
                    src={isSingleImageView ? one_grid : two_grid}
                    alt={isSingleImageView ? "Single View" : "Two Views"}
                    className="w-4 h-4 mr-1"
                />
            </button>
        </div>
    );
};

export default GridMenu;
