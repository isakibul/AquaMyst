import { useNavigate } from 'react-router-dom';
import '../../index.css';
import Back from '../../button/Back';
import Complete from '../../button/Complete';
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

          <Complete  onClick={() => {
                        navigate("/level-three-intro")
                    }}/>
        </div>
    );
};

export default LevelTwoFifth;
