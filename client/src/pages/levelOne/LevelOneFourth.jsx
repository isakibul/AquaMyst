import Back from "../../button/Back";
import { useNavigate } from 'react-router-dom';

const LevelOneFourth = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/level-one-third');
    };

    const handleNext = () => {
        navigate('/level-one-fifth');
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
                    <img className="w-[400px] -mb-[100px] relative z-10 rounded-3xl" src="/living-light.jpg" alt="" />

                    <div className="relative bg-white text-black p-6 rounded-xl shadow-lg w-[800px]"
                        style={{
                            boxShadow: '15px 14px 4px 0px #DFDEDE91',
                        }}>
                        <p
                            className="font-normal text-3xl mt-[100px]"
                            style={{
                                fontFamily: 'Alike Angular',

                            }}
                        >
                            It’s Bioluminescence, A form of chemiluminescence, which is the production of visible light by a chemical reaction. When this kind of reaction occurs in living organisms, the process is called bioluminescence.
                        </p>
                    </div>
                    <div className="flex justify-between w-[90%] mt-[30px]">
                        <button
                            className="font-anton bg-blue-500 text-white py-[10px] px-[50px] text-4xl rounded-xl border-2 border-white shadow-lg tracking-widest"
                            style={{
                                background: 'linear-gradient(180deg, #1AE8F5 0%, #1B85E0 25%, #1C18C9 52.47%, #2918E7 92.19%)',
                            }}
                        >
                            LEARN MORE
                        </button>
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

export default LevelOneFourth;