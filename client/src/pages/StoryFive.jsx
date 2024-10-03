import { useNavigate } from 'react-router-dom';
import '../../src/index.css';
import Next from '../button/Next';
import Back from '../button/Back';
const CharacterExplainFive = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/story-four');
  };

  const handleNext = () => {
    navigate('/story-six');
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
            className="font-normal text-3xl"
            style={{
              fontFamily: 'Alike Angular',

            }}
          >
            It sounds strange, but those vents release heat and minerals from deep inside the planet, creating an ecosystem in the dark. Bacteria around the vents turn those chemicals into energy, and that supports all sorts of life forms.
          </p>
        </div>
      </div>

      <Next onClick={handleNext} />
    </div>
  );
};

export default CharacterExplainFive;
