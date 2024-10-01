
import { useNavigate } from "react-router-dom";
import Back from '../button/Back';
import GameMap from "../button/GameMap";
const ChapterTen = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/story-nine'); 
  };
  const handleNext = () => {
    navigate('/game-map'); 
  };
  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: 'url("/home.jpg")',
      }}
    >
     
     <Back onClick={handleBack} />

    
      <div className="flex justify-center items-center">
        <div
          className="rounded-xl overflow-hidden shadow-lg border-4 border-white"
        >
          <img
            src="/home bg.jpg" 
            alt="Submarine"
            className="w-[680px] h-[400px] object-cover" 
          />
        </div>
      </div>

      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6">
      <GameMap onClick={handleNext}/>
      <button
        className="text-white py-2 px-6 rounded-lg text-lg font-semibold border-4 border-white"
        style={{
          background: 'linear-gradient(180deg, #FF8C00 0%, #FF4500 100%)',
          boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)',
          fontFamily: '"Anton", sans-serif', // Applying the Anton font
        }}
      >
        NASA Mission
      </button>
      <button
        className="text-white py-2 px-6 rounded-lg text-lg font-semibold border-4 border-white"
        style={{
          background: 'linear-gradient(180deg, #FF8C00 0%, #FF4500 100%)',
          boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)',
          fontFamily: '"Anton", sans-serif', // Applying the Anton font
        }}
      >
        Learn
      </button>
    </div>
    </div>
  );
};

export default ChapterTen;
