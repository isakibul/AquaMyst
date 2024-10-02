import { useNavigate } from 'react-router-dom';
import '../../index.css';
import Next from '../../button/Next';
import Back from '../../button/Back';
const LevelTwoThird = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/level-two-second');
    };

    const handleNext = () => {
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
                <div
                    className='font-anton text-3xl text-white bg-slate-300 py-2 px-6 border-2 border-white levelOne'
                >Interact with Vent Chemistry</div>
                <img className='mt-5 h-[400px] w-auto rounded-3xl border-[5px] border-white-200' src="/level-two/vent-game.png" alt="" />
            </div>

            <div className="flex mt-[20px]">
                <button
                    className="bg-blue-500 text-white py-[10px] px-[50px] text-4xl rounded-xl border-2 border-white shadow-lg"
                    style={{
                        background: 'linear-gradient(180deg, #1AE8F5 0%, #1B85E0 25%, #1C18C9 52.47%, #2918E7 92.19%)',
                        fontFamily: 'Agbalumo',
                    }}
                    onClick={handleNext}
                >
                    NEXT
                </button>
            </div>
        </div>
    );
};

export default LevelTwoThird;
