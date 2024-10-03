import Back from '../../button/Back';
import { useNavigate } from 'react-router-dom';

const LevelFiveIntro = () => {
  const navigate = useNavigate();

  const handleBack = () => {
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

      <div className="flex flex-col items-center justify-center h-full space-y-4">
      
<div className="w-[800px] h-[200px] bg-white shadow-lg flex justify-center items-center text-center rounded-3xl mb-4">
      <div className="bg-gray-200 w-[775px] h-[180px] flex flex-col justify-center items-center text-center rounded-3xl">
        <p className="-mb-6 font-anton text-gray-800 text-[36px] font-bold">
          LEVEL <span className="text-[44px]">5</span>
        </p>
        <p
              className="font-anton text-[65px] font-extrabold text-blue-600 gradient-text"
            >
              <span className='text-[75px]'>C</span>reate <span className='text-[75px]'>Y</span>our <span className='text-[75px]'>O</span>ceanic <span className='text-[75px]'>H</span>aven

            </p>
      </div>
    </div>
    <button
      className="bg-blue-500 text-white py-4 px-24 rounded-3xl border-[4px] border-white shadow-lg"
      style={{
        background: 'linear-gradient(180deg, #1AE8F5 0%, #1B85E0 25%, #1C18C9 52.47%, #2918E7 92.19%)',
        fontFamily: 'Agbalumo',
        fontSize: '36px',
      }}
      onClick={() => {
        navigate('/level-five-second');
      }}
    >
      START
    </button>
      </div>
    </div>
  )
}

export default LevelFiveIntro;