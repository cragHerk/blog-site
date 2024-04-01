import Image from "next/image";
import { IoStar } from "react-icons/io5";

const SectionHeader = () => {
  return (
    <div
      id="section-header"
      className="bg-mid text-text  flex justify-center items-center h-24"
    >
      <div className="flex items-center ">
        <span className="text-3xl mr-4">Satysfakcja </span>
        <IoStar size={30} color="#FFEC33" />
        <IoStar size={30} color="#FFEC33" />
        <IoStar size={30} color="#FFEC33" />
        <IoStar size={30} color="#FFEC33" />
      </div>
    </div>
  );
};

export default SectionHeader;
