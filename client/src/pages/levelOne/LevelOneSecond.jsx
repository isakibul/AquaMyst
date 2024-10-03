import { useNavigate } from 'react-router-dom';
import '../../index.css';
import Next from '../../button/Next';
import Back from '../../button/Back';
const LevelOneSecond = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/level-one-intro');
    };

    const handleNext = () => {
        navigate('/level-one-third');
    };

    return (
        <div
            className="relative w-full h-screen overflow-hidden bg-cover bg-center flex flex-col items-center justify-center"
            style={{
                backgroundImage: 'url("/home.jpg")',
            }}
        >
            <Back onClick={handleBack} />

            <div className="flex flex-col items-center space-x-8 mt-10">
                <div
                    className='font-anton text-3xl text-white bg-slate-300 py-2 px-6 border-2 border-white levelOne'
                >LEVEL 1</div>
                <img className='mt-[20px] h-[320px] w-[880px] rounded-3xl border-[5px] border-white-200' src="/level-one-cover.jpg" alt="" />
            </div>

           <Next onClick={handleNext} />
        </div>
    );
};

export default LevelOneSecond;
