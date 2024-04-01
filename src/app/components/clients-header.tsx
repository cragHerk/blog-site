import Image from "next/image";
import { IoSchool } from "react-icons/io5";

const ClientsHeader = () => {
  return (
    <div
      id="clients-header"
      className="bg-mid text-text  flex justify-center items-center h-24"
    >
      <div className="flex items-center ">
        <span className="text-3xl mr-4">Czego się nauczysz </span>
        <IoSchool size={30} color="#05465d" />
      </div>
    </div>
  );
};

export default ClientsHeader;
