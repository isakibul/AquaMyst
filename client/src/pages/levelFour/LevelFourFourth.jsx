/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from 'react-router-dom';
import '../../index.css';
import Back from '../../button/Back';

const LevelFourFourth = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/level-four-third');
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
                    <p>Fantastic work! You've mastered the balance of life in the deep ocean. Now, it's time to take everything you've learned and create your very own thriving underwater world. In Level 5, you'll design an oceanic haven, customize habitats, and ensure your ecosystem stays balanced. Let’s dive into your imagination and build something amazing!</p>
                </div>
            </div>

            <div className="flex mt-[20px]">
                <button
                    className="bg-blue-500 text-white py-[10px] px-[50px] text-4xl rounded-xl border-2 border-white shadow-lg"
                    style={{
                        background: 'linear-gradient(180deg, #1AE8F5 0%, #1B85E0 25%, #1C18C9 52.47%, #2918E7 92.19%)',
                        fontFamily: 'Agbalumo',
                    }}
                    onClick={() => {
                        navigate("/level-five-intro")
                    }}
                >
                    Complete
                </button>
            </div>
        </div>
    );
};

export default LevelFourFourth;
