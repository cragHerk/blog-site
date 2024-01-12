import { HiAcademicCap } from "react-icons/hi";
const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(90vh)] bg-gray-300 bg-cover bg-center bg-no-repeat bg-[url('/bg.jpg')]">
      <div className="absolute top-[120px] left-[40px] m-4 p-3 rounded-full bg-blue-400 flex justify-center items-center ">
        <HiAcademicCap size={40} />
      </div>
      <div className="w-full h-full max-w-2xl flex flex-col items-center justify-center">
        <div className="text-5xl font-bold text-white p-4 mb-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-t-lg shadow-lg hover:rotate-[5deg] transition duration-300">
          Witaj na mojej stronie!
        </div>
        <div className="text-xl text-white p-4 mb-8 bg-gray-800 rounded-b-lg shadow-lg">
          Znajdziesz tu informacje o lekcjach jakie prowadzę
        </div>
        <button
          type="button"
          className="p-4 mt-9 text-3xl font-bold text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 hover:scale-110 transition duration-300"
        >
          Korepetycje
        </button>
      </div>
    </div>
  );
};

export default Hero;
