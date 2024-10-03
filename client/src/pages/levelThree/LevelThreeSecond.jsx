import Back from "../../button/Back";
import { useNavigate } from 'react-router-dom';
import Next from "../../button/Next";

const LevelThreeSecond = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/level-three-intro');
    };

    const handleNext = () => {
        navigate('/level-three-third');
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
                      Look around, kiddo! We're about to meet some of the most fascinating creatures in the deep ocean. These life forms have adapted to survive in complete darkness, freezing temperatures, and crushing pressure. Each one has its own special tricks to thrive in this harsh world.
                    </p>
                </div>
               <Next onClick={handleNext}/>
            </div>
        </div>
    </div>
    )
}

export default LevelThreeSecond;