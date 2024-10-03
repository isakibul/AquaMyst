import Back from "../../button/Back";
import { useNavigate } from 'react-router-dom';
import Next from "../../button/Next"

const LevelFiveSecond = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/level-five-intro');
  };

  const handleNext = () => {
    navigate('/level-five-third');
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: 'url("/home.jpg")',
      }}
    >
      <Back onClick={handleBack} />

      <div className="flex items-center space-x-8 mr-[140px]">
        <div className="flex-shrink-0">
          <img
            src="/grandpa.png"
            alt="Character"
            className="w-72 -mb-80"
          />
        </div>

        <div>
          <div className="relative bg-white text-black p-6 rounded-xl shadow-lg w-[800px]"
            style={{
              boxShadow: '15px 14px 4px 0px #DFDEDE91',
            }}>
            <p
              className="font-normal text-3xl"
              style={{
                fontFamily: 'Alike Angular',

              }}
            >
              Well, kiddo, we’ve come so far! You’ve explored the depths, uncovered incredible secrets, and learned how life thrives in this unique ocean world. Now, it’s time for the biggest challenge yet—finding a whole new planet! Imagine the possibilities of bringing everything you’ve learned and building diverse ecosystems on another world. While this may be the final step here, it's just the beginning of your adventure. The stars are waiting for you!
            </p>
          </div>
          <Next onClick={handleNext} />
        </div>
      </div>
    </div>
  )
}

export default LevelFiveSecond;