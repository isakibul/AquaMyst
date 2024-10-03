/* eslint-disable react/no-unescaped-entities */
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
      {/* Back Button */}
      <Back onClick={handleBack} />

      <div className="flex items-center justify-items-center  mt-12">

        <div
          className="ml-[150px] -mt-[100px] bg-white text-black p-6 rounded-xl shadow-lg max-w-xl"
          style={{
            boxShadow: '15px 14px 4px 0px #DFDEDE91',
          }}
        >
          <p
            className="font-normal text-2xl "
            style={{
              fontFamily: 'roboto',
            }}
          >

            Wow, Grandpa! I can't believe we’ve made it this far. I’ve learned so much, and this is it—the final step on this planet! But I feel like it's just the beginning. Let's go find a whole new world, even more mysterious than this one. Who knows what incredible life forms are waiting for us out there? I'm ready for the next adventure!
          </p>
        </div>

        <div className="relative">
          <img
            src="/girl.png"
            alt="Character"
            className="w-[430px] -mb-[50px] mr-[160px]"
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

export default LevelFiveThird;
