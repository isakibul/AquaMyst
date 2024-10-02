import Back from "../../button/Back";
import { useNavigate } from 'react-router-dom';

const LevelOneFifth = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/level-one-fourth');
    };

    return (
        <div
            className="relative w-full h-screen overflow-hidden bg-cover bg-center flex flex-col items-center justify-center"
            style={{
                backgroundImage: 'url("/home.jpg")',
            }}
        >
            <Back onClick={handleBack} />

            <div className="w-[600px] bg-white p-10 text-3xl text-justify font-roboto rounded-3xl">
                <p><span className="text-red-700">Congratulations!</span> You've successfully navigated the dark ocean depths and uncovered the secrets of bioluminescent life. Get ready to dive deeper as we explore the heart of the ocean in Level 2.</p>
            </div>
            <button
                className="mt-[30px] bg-blue-500 text-white py-[10px] px-[50px] text-4xl rounded-xl border-2 border-white shadow-lg"
                style={{
                    background: 'linear-gradient(180deg, #1AE8F5 0%, #1B85E0 25%, #1C18C9 52.47%, #2918E7 92.19%)',
                    fontFamily: 'Agbalumo',
                }}
                onClick={() => {
                    navigate('/game-map')
                }}
            >
                Complete
            </button>
        </div>
    )
}

export default LevelOneFifth;