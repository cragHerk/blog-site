import { IoShareSocialOutline } from "react-icons/io5";

const FooterHeader = () => {
  return (
    <div className="bg-mid text-text  flex justify-center items-center h-24">
      <div className="flex items-center ">
        <span className="text-3xl mr-4">Zostańmy w kontakcie </span>
        <IoShareSocialOutline size={30} />
      </div>
    </div>
  );
};

export default FooterHeader;
