import { useNavigate } from 'react-router-dom';
import '../../src/index.css';
import Next from '../button/Next';
import Back from '../button/Back';
const CharacterExplainSeven = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/story-six');
  };

  const handleNext = () => {
    navigate('/story-eight');
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
        No green plants here because there’s no sunlight. But there are special creatures—some even glow in the dark, using bioluminescence to communicate and attract food. Think of them like living lanterns lighting up the deep ocean.
        </p>
      </div>
    </div>

    <Next onClick={handleNext} />
  </div>
  );
};

export default CharacterExplainSeven;
