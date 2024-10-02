import { useNavigate } from 'react-router-dom';
import '../../index.css';
import Back from '../../button/Back';
const LevelTwoFifth = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/level-two-fourth');
    };

    return (
        <div
            className="relative w-full h-screen overflow-hidden bg-cover bg-center flex flex-col items-center justify-center"
            style={{
                backgroundImage: 'url("/home.jpg")',
            }}
        >
            <Back onClick={handleBack} />

            <div className="flex flex-col items-center space-x-8 mt-[45px]">
                <div className="w-[700px] mt-[30px] bg-white p-10 text-3xl text-justify font-roboto rounded-3xl">
                    <p>Great job, explorer! You've unlocked the secrets of chemosynthesis and how life begins at these hydrothermal vents. You're ready for the next adventure. Let’s dive deeper into the unknown and discover the incredible creatures that call this world home. Onward to Level 3!</p>
                </div>
            </div>

            <div className="flex mt-[20px]">
                <button
                    className="bg-blue-500 text-white py-[10px] px-[50px] text-4xl rounded-xl border-2 border-white shadow-lg"
                    style={{
                        background: 'linear-gradient(180deg, #1AE8F5 0%, #1B85E0 25%, #1C18C9 52.47%, #2918E7 92.19%)',
                        fontFamily: 'Agbalumo',
                    }}
                    onClick={() => {
                        navigate("/game-map")
                    }}
                >
                    Complete
                </button>
            </div>
        </div>
    );
};

export default LevelTwoFifth;
