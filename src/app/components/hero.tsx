"use client";

import { HiAcademicCap } from "react-icons/hi";
const Hero = () => {
  const scrollToSection = () => {
    const sectionElement = document.getElementById("section");
    if (sectionElement) {
      const sectionPosition =
        sectionElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh)] bg-gray-300 bg-cover bg-center bg-no-repeat bg-[url('/bgM.webp')] lg:bg-[url('/bgT.webp')] xl:bg-[url('/bgD.webp')]">
      <div className="absolute top-[60px] md:top-[120px] left-0 md:left-[40px] m-4 p-3 rounded-full bg-blue-400 flex justify-center items-center ">
        <HiAcademicCap size={40} />
      </div>
      <div className="w-full h-full max-w-2xl flex flex-col items-center justify-center">
        <div className="text-5xl font-bold text-white p-4 mb-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-t-lg shadow-lg hover:rotate-[5deg] transition duration-300">
          Witaj na mojej stronie!
        </div>
        <div className="text-xl text-white p-4 mb-8 bg-gray-800 rounded-b-lg shadow-lg">
          Znajdziesz tu informacje o lekcjach jakie prowadzę
        </div>
        <div
          className="p-4 mt-9 text-3xl font-bold text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 hover:scale-110 transition duration-300 cursor-pointer"
          onClick={scrollToSection}
        >
          Korepetycje
        </div>
      </div>
    </div>
  );
};

export default Hero;
