import React from 'react'
import Back from '../../button/Back';
import { useNavigate } from 'react-router-dom';

const LevelThreeIntro = () => {
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
                <div className="w-[850px] h-[260px] bg-white shadow-lg flex justify-center items-center text-center rounded-3xl mb-6">

                    <div className='bg-gray-200 w-[825px] h-[230px] flex flex-col justify-center items-center text-center rounded-3xl'
                    >
                        <p className="font-anton text-gray-800 text-[48px] font-bold">LEVEL <span className='text-[56px]'>3</span></p>
                        <p
                            className="font-anton text-[70px] font-extrabold text-blue-600 gradient-text"
                        >
                            <span className='text-[80px]'>T</span>HE <span className='text-[80px]'>C</span>reatures OF THE <span className='text-[80px]'>D</span>EEP
                        </p>
                    </div>

                </div>

                <button className="bg-blue-500 text-white py-6 px-36 rounded-3xl border-[5px] border-white shadow-lg mt-1.5"
                    style={{
                        background: 'linear-gradient(180deg, #1AE8F5 0%, #1B85E0 25%, #1C18C9 52.47%, #2918E7 92.19%)',
                        fontFamily: 'Agbalumo',
                        fontSize: '45px'
                    }}
                    onClick={() => {
                        navigate("/level-three-second")
                    }}
                >
                    START
                </button>
            </div>
        </div>
    )
}

export default LevelThreeIntro;