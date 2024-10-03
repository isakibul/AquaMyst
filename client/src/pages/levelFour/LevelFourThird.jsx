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
            
                <Back onClick={handleBack} />
           
            <div className="flex flex-col items-center space-x-8 mt-[30px]">
                <div className="w-[850px] mt-[8px] border-4 border-[#52C0FE] bg-white p-6 text-3xl text-justify font-roboto rounded-2xl">
                    <p> This deep-sea cephalopod has two unique photoreceptors on its mantle as well as a delicate webbing connecting its rubbery tentacles.</p>
                </div>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-6">
                {/* Image */}
                <div>
                    <img
                        className="h-[280px] w-[400px] rounded-3xl border-4 border-white shadow-lg"
                        src="/level-four/c1.jpeg"
                        alt="Deep-sea cephalopod"
                    />
                </div>

                {/* Answer Options */}
                <div className="grid grid-cols-1 gap-4">
                    <button className="text-xl font-roboto rounded-2xl bg-white text-black border-4 border-blue-400 px-6 py-3 w-[350px]">A. Demon pineapple squid</button>
                    <button className="text-xl font-roboto rounded-2xl bg-white text-black border-4 border-blue-400 px-6 py-3 w-[350px]">B. Blue-eyed red squid</button>
                    <button className="text-xl font-roboto rounded-2xl bg-white text-black border-4 border-blue-400 px-6 py-3 w-[350px]">C. Vampire squid</button>  
                    <button className="text-xl font-roboto rounded-2xl bg-white text-black border-4 border-blue-400 px-6 py-3 w-[350px]">D. Deep-sea umbrella squid</button>
                  
                </div>
            </div>

           
                <Next onClick={handleNext} />
          
        </div>
    );
};

export default LevelFourSecond;
