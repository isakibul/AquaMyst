import { useNavigate } from "react-router-dom";
import '../../src/index.css';

const CharacterSelect = () => {
  const navigate = useNavigate();

  const handleCharacterClick = (character) => {
    navigate(`/story/${character}`);
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: 'url("/home.jpg")',
      }}
    >
      <div className="pb-4 bg-white bg-opacity-70 p-8 rounded-3xl shadow-lg w-3/4">
        <h1
          className="adlam-display-regular mb-10 text-4xl text-center"
          style={{
            fontFamily: "ADLaM Display",
            color: "#359AD3",
          }}
        >
          Select a Character
        </h1>

        <div className="flex space-x-32 justify-center">
  <div
    className="bg-white bg-opacity-80 p-6 rounded-xl shadow-lg cursor-pointer transform transition-all duration-1000 hover:-translate-y-6 hover:bg-blue-300"
    onClick={() => handleCharacterClick("boy")}
  >
    <img
      src="/boy.png"
      alt="Character 1"
      className="w-52 h-auto object-contain"
    />
    <p className="adlam-display-regular text-3xl text-center">Male</p>
  </div>

  <div
    className="bg-white bg-opacity-80 p-6 rounded-xl shadow-lg cursor-pointer transform transition-all duration-1000 hover:-translate-y-6 hover:bg-blue-300"
    onClick={() => handleCharacterClick("girl")}
  >
    <img
      src="/girl.png"
      alt="Character 2"
      className="w-52 h-auto object-contain"
    />
    <p className="adlam-display-regular text-3xl text-center">Female</p>
  </div>
</div>

      </div>
    </div>
  );
};

export default CharacterSelect;
