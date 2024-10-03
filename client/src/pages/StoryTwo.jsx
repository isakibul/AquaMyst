import { useNavigate } from 'react-router-dom';
import '../../src/index.css';
import Next from '../button/Next';
import Back from '../button/Back';
const StoryTwo = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/story/:character');
  };

  const handleNext = () => {
    navigate('/story-three');
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: 'url("/home.jpg")',
      }}
    >


      <Back onClick={handleBack} />
      <div className="flex items-center justify-between  mt-12">

        <div
          className="-mr-[150px] -mt-[150px] bg-white text-black p-6 rounded-xl shadow-lg max-w-xl"
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
            No sunlight at all? How can anything live there, Grandpa?
          </p>
        </div>

        <div className="relative">
          <img
            src="/girl.png"
            alt="Character"
            className="w-[600px] -mb-[250px] mr-[60px]"
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      </div>


      <Next onClick={handleNext} />
    </div>
  );
};

export default StoryTwo;
