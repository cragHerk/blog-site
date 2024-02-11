"use client";

import Image from "next/image";
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
    <div className="flex flex-col md:flex-row items-center justify-center h-[calc(85vh)] bg-top ">
      <div className="w-full h-full max-w-2xl flex flex-col items-start justify-center">
        <div className="  text-5xl font-bold text-text p-5   rounded-t-lg  hover:rotate-[5deg] transition duration-300">
          Korepetycje z matematyki
        </div>
        <div className="text-l text-text p-5 mb-4 bg-gray-800 rounded-b-lg max-w-[500px] ">
          Nie mogę sprawić, że przestaniesz martwić się o swoje dziecko. Ale
          korepetycje mogą sprawić, że jego oceny i pewność siebie wzrosną - a
          Ty będziesz się mniej martwić.
        </div>
        <div
          className="ml-5 p-3 mt-9 text-3xl font-bold text-text bg-mid rounded   hover:scale-110 transition duration-300 cursor-pointer"
          onClick={scrollToSection}
        >
          Rodzaje lekcji
        </div>
      </div>
      <div className="hidden md:block">
        <Image src="/calc.png" alt="calc" width={500} height={500} />
      </div>
    </div>
  );
};

export default Hero;
