import Back from "../../button/Back";
import Next from "../../button/Next";
import { useNavigate } from 'react-router-dom';

const LevelOneFourth = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/level-one-third');
  };

  const handleNext = () => {
    navigate('/level-one-fifth');
  };

  return (
    
     <div
      className="relative w-full h-screen overflow-hidden bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: 'url("/home.jpg")',
      }}
    >
     <Back onClick={handleBack} />
     

      <div className="flex items-center space-x-10">
        <div className="flex-shrink-0">
          <img
            src="/grandpa.png" 
            alt="Character"
            className="w-72 -mb-80"
          />
        </div>

       
           <div className="flex flex-col items-center">
          {/* Main Image */}
          <img className="w-[400px] -mb-[100px] relative z-10 rounded-3xl" src="/living-light.jpg" alt="" />

          {/* Text Section */}
          <div
            className="relative bg-white text-black p-6 rounded-xl shadow-lg w-[500px]"
            style={{
              boxShadow: '15px 14px 4px 0px #DFDEDE91',
            }}
          >
            <p
              className="font-normal text-2xl mt-20"
              style={{
                fontFamily: 'Alike Angular',
              }}
            >
              It’s Bioluminescence, a form of chemiluminescence, which is the production of visible light by a chemical reaction. When this kind of reaction occurs in living organisms, the process is called bioluminescence.
            </p>
          </div>

        </div>
      </div>

      <Next onClick={handleNext} />
    </div>
  );
};

export default LevelOneFourth;
