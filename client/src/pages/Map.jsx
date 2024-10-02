import React from 'react';
import { useNavigate } from 'react-router-dom';
import mapImage from '/map.png';
import line from "/Line.png"
import Back from '../button/Back';
const Map = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/home-screen');
  };

  return (

    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black">
      <img src={mapImage} alt="Map" className="w-full h-auto" />
      <Back onClick={handleBack} />

      <img src={line} alt="Overlay Line" className="absolute h-auto w-3/4" />
      <button
        onClick={() => {
          navigate(`/level-one-intro`);
        }}
        className="absolute top-[450px] left-[378px] transform -translate-x-1/2 -translate-y-1/2"
      >
        <img src="/L1.png" alt="Point 1" className="w-10 h-10" />
      </button>

      <button
        onClick={() => {
          navigate(`/level-two-intro`);
        }}
        className="absolute top-[200px] left-[170px]  transform -translate-x-1/2 -translate-y-1/2"
      >
        <img src="/L2.png" alt="Point 3" className="w-10 h-10" />
      </button>

      <button
        onClick={() => {
          navigate(`/level-three-intro`);
        }}
        className="absolute top-1/3 left-[520px]  transform -translate-x-1/2 -translate-y-1/2"
      >
        <img src="/L3.png" alt="Point 2" className="w-10 h-10 " />
      </button>

      <button
        onClick={() => handleButtonClick(4)}
        className="absolute top-[500px] left-[] transform -translate-x-1/2 -translate-y-1/2"
      >
        <img src="/L4.png" alt="Point 4" className="w-10 h-10" />
      </button>

      <button
        onClick={() => handleButtonClick(5)}
        className="absolute top-[148px] right-[340px] transform -translate-x-1/2 -translate-y-1/2"
      >
        <img src="/L5.png" alt="Point 5" className="w-10 h-10" />
      </button>

    </div>


  );
};

export default Map;
