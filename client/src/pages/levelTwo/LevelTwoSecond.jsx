import Back from "../../button/Back";
import { useNavigate } from 'react-router-dom';
import Next from "../../button/Next";

const LevelTwoSecond = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/level-two-intro');
    };

    const handleNext = () => {
        navigate('/level-two-third');
    };

    return (
        
        <div
        className="relative w-full h-screen overflow-hidden bg-cover bg-center flex flex-col items-center justify-center"
        style={{
            backgroundImage: 'url("/home.jpg")',
        }}
    >
        <Back onClick={handleBack} />

        <div className="flex items-center space-x-8 ml-[40px]">
            <div className="flex-shrink-0">
                <img
                    src="/grandpa.png"
                    alt="Character"
                    className="w-72 -mb-80"
                />
            </div>

            <div className="flex flex-col items-center my-[60px]">
                <div className="relative bg-white text-black p-6 rounded-xl shadow-lg w-[700px] flex items-center"
                    style={{
                        boxShadow: '15px 14px 4px 0px #DFDEDE91',
                    }}>
                    <img className="w-[180px] h-[200px] rounded-3xl mr-[30px]" src="/level-two/vents.jpg" alt="" />
                    <p
                        className="text-xl text-justify font-roboto"
                    >
                       Welcome to the heart of the ocean, kiddo! Down here, there’s no sunlight, but life still thrives. See those hydrothermal vents? They’re like underwater volcanoes. Instead of sunlight, the creatures here use the chemicals from these vents to survive. It's called chemosynthesis, and it’s the start of the food chain in this strange world. Let’s get closer and see how the smallest bacteria turn energy into life!
                    </p>
                </div>
               <Next onClick={handleNext}/>
            </div>
        </div>
    </div>
    )
}

export default LevelTwoSecond;