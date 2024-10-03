/* eslint-disable react/prop-types */

function Back({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-10 left-16 bg-blue-500 text-white py-[6px] px-[20px] text-2xl rounded-lg border-2 border-white shadow-lg"
      style={{
        background: 'linear-gradient(180deg, #1AE8F5 0%, #1B85E0 25%, #1C18C9 52.47%, #2918E7 92.19%)',
        fontFamily: 'Agbalumo',
      }}
    >
      Back
    </button>
  )
}

export default Back;
