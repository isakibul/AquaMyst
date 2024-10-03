import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CoverScreen = () => {
  const [showButton, setShowButton] = useState(false);
  const [slideIn, setSlideIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
      setTimeout(() => setSlideIn(true), 50);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = () => {
    navigate("/character-selection");
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: 'url("/home.jpg")',
      }}
    >
      <div className="flex items-center justify-center">
        <img src="/AquaMyst.png" alt="AquaMyst" className="w-3/4" />
      </div>

      <p className="text-yellow-400 text-2xl md:text-3xl font-normal mt-4">
        EXPLORE A WORLD BEYOND SUNLIGHT
      </p>

      <div className="mt-8">
        {showButton ? (
          <button
            onClick={handleButtonClick}
            className={`px-6 py-4 text-white font-bold text-2xl border border-white rounded-xl shadow-lg transition-all duration-700 transform ${slideIn ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            style={{
              background:
                'linear-gradient(180deg, #1AE8F5 0%, #1B85E0 25%, #1C18C9 52.47%, #2918E7 92.19%)',
              fontFamily: 'Agbalumo',
            }}
          >
            START
          </button>
        ) : (
          <div className="px-6 py-4 text-transparent">START</div>
        )}
      </div>
    </div>
  );
};

export default CoverScreen;
