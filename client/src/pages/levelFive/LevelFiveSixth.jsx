import { useNavigate } from 'react-router-dom';
import '../../index.css';
import Back from '../../button/Back';
import Next from '../../button/Next';

const LevelFiveSixth = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/level-five-fourth');
  };

  const handleNext = () => {
    navigate('/');
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: 'url("/home.jpg")',
      }}
    >
      <Back onClick={handleBack} />

      <div className="flex flex-col items-center justify-center space-x-8">
        <p className='text-3xl text-white font-roboto'>Provide your feedback</p>
        <textarea className='h-[300px] w-[800px] mt-3 rounded-xl' name="" id=""></textarea>
      </div>

      <button
        className="mt-5 bg-blue-500 text-white py-[10px] px-[50px] text-4xl rounded-xl border-2 border-white shadow-lg"
        style={{
          background: 'linear-gradient(180deg, #1AE8F5 0%, #1B85E0 25%, #1C18C9 52.47%, #2918E7 92.19%)',
          fontFamily: 'Agbalumo',
        }}
        onClick={handleNext}
      >
        Submit
      </button>
    </div>
  );
};

export default LevelFiveSixth;
