import { FaQuestionCircle } from "react-icons/fa";

const FaqHeader = () => {
  return (
    <div className="bg-mid text-text  flex justify-center items-center h-24">
      <div className="flex items-center ">
        <span className="text-3xl mr-4">Często zadawane pytania </span>
        <FaQuestionCircle size={30} color="purple" />
      </div>
    </div>
  );
};

export default FaqHeader;
