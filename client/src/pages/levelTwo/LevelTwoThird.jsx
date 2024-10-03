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
                <img className='mt-5 h-[380px] w-[600px] rounded-3xl border-[5px] border-white-200' src="/level-two/vent-game.png" alt="" />
            </div>

           <Next onClick={handleNext}/>
            </div>
       
    );
};

export default LevelTwoThird;
