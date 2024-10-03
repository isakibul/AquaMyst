import { useNavigate } from 'react-router-dom';
import '../../index.css';
import Next from '../../button/Next';
import Back from '../../button/Back';

const LevelFiveThird = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/level-five-second');
  };

  const handleNext = () => {
    navigate('/level-five-fourth');
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
          className="relative mb-[240px] -mr-[65px] bg-white text-black py-10 px-14 rounded-xl shadow-lg max-w-2xl mt-[200px]"
          style={{
            boxShadow: '15px 14px 4px 0px #DFDEDE91',
          }}
        >
          <p
            className="font-normal text-3xl"
            style={{
              fontFamily: 'Alike Angular',
            }}
          >
            Wow, Grandpa! I can't believe we’ve made it this far. I’ve learned so much, and this is it—the final step on this planet! But I feel like it's just the beginning. Let's go find a whole new world, even more mysterious than this one. Who knows what incredible life forms are waiting for us out there? I'm ready for the next adventure!
          </p>
        </div>

        <div className="relative">
          <img
            src="/girl.png"
            alt="Character"
            className="w-[700px] h-auto -mb-60"
            style={{
              objectFit: 'contain',
              marginLeft: '-74px'
            }}
          />
        </div>
      </div>

      <Next onClick={handleNext} />
    </div>
  );
};

export default LevelFiveThird;
