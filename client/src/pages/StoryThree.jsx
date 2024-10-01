import { useNavigate } from 'react-router-dom';
import '../../src/index.css';
import Next from '../button/Next';
import Back from '../button/Back';
const StoryThree = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/story-two');
  };

  const handleNext = () => {
    navigate('/story-four');
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: 'url("/home.jpg")',
      }}
    >
   <Back onClick={handleBack} />

      <div className="flex items-center space-x-8">
        <div className="flex-shrink-0">
          <img
            src="/grandpa.png" 
            alt="Character"
            className="w-72 -mb-80"
          />
        </div>

        <div className="relative bg-white text-black p-6 rounded-xl shadow-lg max-w-xl"
          style={{
            boxShadow: '15px 14px 4px 0px #DFDEDE91',
          }}>
          <p
            className="font-normal text-4xl"
            style={{
              fontFamily: 'Alike Angular',
              
            }}
          >
            Here Life survives differently. It uses chemosynthesis instead of  photosynthesis, the creatures there rely on chemicals from the ocean floor—like hydrogen sulfide and methane—from hydrothermal vents.
          </p>
        </div>
      </div>

      <Next onClick={handleNext} />
    </div>
  );
};

export default StoryThree;
