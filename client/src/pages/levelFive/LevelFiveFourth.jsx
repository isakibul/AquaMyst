import { useNavigate } from 'react-router-dom';
import '../../index.css';
import Back from '../../button/Back';
import Next from '../../button/Next';

const LevelFiveFourth = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/level-five-third');
  };

  const handleNext = () => {
    navigate('/level-five-fifth');
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: 'url("/home.jpg")',
      }}
    >
      <Back onClick={handleBack} />

      <div className="flex flex-col items-center space-x-8 mt-[45px]">
        <div
          className='font-anton text-3xl text-white bg-slate-300 py-2 px-6 border-2 border-white levelOne'
        >Europa Clipper AR</div>
        <img className='mt-5 h-[400px] w-auto rounded-3xl border-[5px] border-white-200' src="/level-five/europa.png" alt="" />
      </div>
      <button
        className='font-anton mt-5 bg-slate-400 py-3 px-7 text-white rounded-lg border-4 border-white tracking-widest'
        style={{ background: 'linear-gradient(180deg, #ffbd1c 0%, #ffbd1c 25%, #ab8118 52.47%, #ffbd1c 92.19%)' }}
      >
        LEARN MORE
      </button>

      <Next onClick={handleNext} />
    </div>
  );
};

export default LevelFiveFourth;
