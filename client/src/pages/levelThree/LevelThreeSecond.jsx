import Back from "../../button/Back";
import { useNavigate } from 'react-router-dom';

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

            <div className="flex items-center space-x-8 mr-[140px]">
                <div className="flex-shrink-0">
                    <img
                        src="/grandpa.png"
                        alt="Character"
                        className="w-72 -mb-80"
                    />
                </div>

                <div className="flex flex-col items-center mt-[60px]">
                    <div className="relative bg-white text-black p-6 rounded-xl shadow-lg w-[800px] flex items-center"
                        style={{
                            boxShadow: '15px 14px 4px 0px #DFDEDE91',
                        }}>
                        <img className="w-[190px] h-[220px] rounded-3xl mr-[30px]" src="/level-two/vents.jpg" alt="" />
                        <p
                            className="text-3xl text-justify font-roboto"
                        >
                            Look around, kiddo! We're about to meet some of the most fascinating creatures in the deep ocean. These life forms have adapted to survive in complete darkness, freezing temperatures, and crushing pressure. Each one has its own special tricks to thrive in this harsh world.
                        </p>
                    </div>
                    <div className="flex mt-[30px] ml-auto">
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
            </div>
        </div>
    )
}

export default LevelThreeSecond;