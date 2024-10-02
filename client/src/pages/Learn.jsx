import React from 'react';
import Back from '../button/Back';
import { useNavigate } from 'react-router-dom';

const Learn = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/home-screen');
  };


  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/home.jpg')" }}>
      <Back onClick={handleBack} />

      <button
        className="absolute top-20 text-white text-lg py-3 px-8 rounded-lg shadow-lg font-bold bg-gradient-to-r from-lime-400 to-lime-500"
        style={{
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 700,
        }}
      >
        Learn from NOW
      </button>

      <div className="flex space-x-6">
        <div className="bg-white/20 backdrop-blur-sm p-8 rounded-lg w-60 h-48 flex flex-col items-center justify-center border-[6px] border-white">
          <img src="/explore3.png" alt="Geophysics" className="w-16 h-16 mb-4" />
          <h2 className="text-white text-3xl font-bold" style={{
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 700,
          }}>
            Geophysics
          </h2>
        </div>

        <div className="bg-white/20 backdrop-blur-sm p-8 rounded-lg w-60 h-48 flex flex-col items-center justify-center border-[6px] border-white">
          <img src="/explore2.png" alt="Ocean Systems" className="w-16 h-16 mb-4" />
          <h2 className="text-white text-xl font-bold" style={{
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 700,
          }}>
            Ocean Systems
          </h2>
        </div>

        <div className="bg-white/20 backdrop-blur-sm p-8  rounded-lg w-60 h-48 flex flex-col items-center justify-center border-[6px] border-white">
          <img src="/explore.png" alt="Life" className="w-16 h-16 mb-4" />
          <h2 className="text-white text-3xl font-bold" style={{
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 700,
          }}>
            Life
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Learn;
