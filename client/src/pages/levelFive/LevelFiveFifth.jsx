import { useNavigate } from 'react-router-dom';
import '../../index.css';
import Back from '../../button/Back';
import Next from '../../button/Next';

const LevelFiveFourth = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/level-five-fourth');
  };

  const handleNext = () => {
    navigate('/level-five-sixth');
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: 'url("/home.jpg")',
      }}
    >
      <Back onClick={handleBack} />

      <div className="flex flex-col items-center space-x-8 mt-[70px]">
        <div
          className='ms-5 font-anton text-3xl text-white bg-slate-300 py-2 px-6 border-2 border-white levelOne'
        >Explore Ocean World with Europa Clipper</div>
        
        {/* Embedding video from Google Drive */}
        <iframe
          className='mt-5 h-[400px] w-[600px] rounded-3xl border-[5px] border-white-200'
          src="https://drive.google.com/file/d/1rBT33i-Eo-WuVme7UZNBpEf8V7nDACEC/preview"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Europa Clipper Video"
        ></iframe>
      </div>
      <Next onClick={handleNext} />
    </div>
  );
};

export default LevelFiveFourth;
