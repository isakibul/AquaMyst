import React from 'react';
import Back from '../button/Back';
import { useNavigate } from 'react-router-dom';

const missionNasa = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/learn-page');
  };
  const missions = [
    { title: 'Europa Clipper Mission', image: '/EuropaClipper.png' },
    { title: 'Ocean Worlds', image: '/ocean-worlds-promo.jpeg' },
    { title: 'Dragonfly Mission', image: '/dragonfly-inflight.jpeg' },
    { title: 'Enceladus Exploration', image: '/Enceladus Exploration.jpeg' },
    { title: 'Cryobot Mission', image: '/cryobot1.jpeg' },
    { title: 'SUBSEA Mission', image: '/subsea.jpg' },
  ];

  
  const robotoFont = {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 900,
  };

  return (
    <div className="relative bg-cover bg-center h-screen overflow-hidden pt-20" style={{ backgroundImage: 'url(/home.jpg)' }}>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet" />
      
     <Back onClick={handleBack}/>
      <div className="grid grid-cols-3 gap-4 p-8">
        {missions.map((mission, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden shadow-lg bg-white">
            <img src={mission.image} alt={mission.title} className="w-full h-48 object-cover" />
            <div className="absolute top-[163px] bottom-0 left-0 right-0 flex justify-center items-center pb-4">
              <div className="bg-gradient-to-b from-blue-400 to-blue-600 text-white text-center py-2 px-6 rounded-full shadow-lg border-2 border-white" style={robotoFont}>
                {mission.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default missionNasa;
