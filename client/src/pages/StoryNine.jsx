import { useNavigate } from 'react-router-dom';
import '../../src/index.css';
import Next from '../button/Next';
import Back from '../button/Back';
import Explore from '../button/Explore';
const CharacterExplainNine = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/story-eight');
  };

  const handleExplore = () => {
    navigate('/home-Screen');
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: 'url("/home.jpg")',
      }}
    >
     <Back onClick={handleBack} />

      {/* Content */}
      <div className="flex items-center space-x-8">
        <div className="flex-shrink-0">
          <img
            src="/grandpa.png"
            alt="Character"
            className="w-72 -mb-80"
          />
        </div>

        <div
          className="relative bg-white text-black p-6 rounded-xl shadow-lg max-w-xl"
          style={{
            boxShadow: '15px 14px 4px 0px #DFDEDE91',
          }}
        >
          <p
            className="font-normal text-4xl"
            style={{
              fontFamily: 'Alike Angular',
            }}
          >
            Exactly! You see, exploring these alien oceans might teach us a lot about the diversity of life, even beyond our solar system. NASA scientists believe worlds like this could exist on moons like Europa or Enceladus.
          </p>
        </div>
      </div>

  <Explore onClick={handleExplore}/>
    
    </div>
  );
};

export default CharacterExplainNine;
