/* eslint-disable react/prop-types */

function GameMap({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-white py-2 px-6 rounded-lg text-lg font-semibold border-4 border-white"
      style={{
        background: 'linear-gradient(180deg, #FF8C00 0%, #FF4500 100%)',
        boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)',
        fontFamily: '"Anton", sans-serif', // Applying the Anton font
      }}
    >
      GAME MAP
    </button>
  );
}

export default GameMap;
