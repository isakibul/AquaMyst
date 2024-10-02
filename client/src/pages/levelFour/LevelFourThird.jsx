import { useNavigate } from 'react-router-dom';
import '../../index.css';
import Back from '../../button/Back';
import Next from '../../button/Next';

const LevelFourSecond = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/level-four-second');
    };

    const handleNext = () => {
        navigate('/level-four-fourth');
    };

    return (
        <div
            className="relative w-full h-screen overflow-hidden bg-cover bg-center flex flex-col items-center justify-center"
            style={{
                backgroundImage: 'url("/home.jpg")',
            }}
        >
            {/* Back Button */}
            <div className="absolute top-5 left-5">
                <Back onClick={handleBack} />
            </div>
            <div className="flex flex-col items-center space-x-8 mt-[45px]">
                <div className="w-3/4 mt-[30px] border-4 border-[#52C0FE] bg-white p-10 text-3xl text-justify font-roboto rounded-3xl">
                    <p> This deep-sea cephalopod has two unique photoreceptors on its mantle as well as a delicate webbing connecting its rubbery tentacles.</p>
                </div>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-6">
                {/* Image */}
                <div>
                    <img
                        className="h-[300px] w-auto rounded-3xl border-4 border-white shadow-lg"
                        src="/level-four/c1.jpeg"
                        alt="Deep-sea cephalopod"
                    />
                </div>

                {/* Answer Options */}
                <div className="grid grid-cols-1 gap-4">
                    <button className="text-xl font-roboto rounded-2xl bg-white text-black border-4 border-blue-400 px-6 py-3 w-[380px]">A. Demon pineapple squid</button>
                    <button className="text-xl font-roboto rounded-2xl bg-white text-black border-4 border-blue-400 px-6 py-3 w-[380px]">B. Blue-eyed red squid</button>
                    <button className="text-xl font-roboto rounded-2xl bg-white text-black border-4 border-blue-400 px-6 py-3 w-[380px]">C. Vampire squid</button>  
                    <button className="text-xl font-roboto rounded-2xl bg-white text-black border-4 border-blue-400 px-6 py-3 w-[380px]">D. Deep-sea umbrella squid</button>
                  
                </div>
            </div>

            {/* Next Button */}
            <div className="absolute bottom-2 right-1">
                <Next onClick={handleNext} />
            </div>
        </div>
    );
};

export default LevelFourSecond;
