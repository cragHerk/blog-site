import { HashLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="bg-gray-300 w-screen h-screen flex items-center justify-center">
      <HashLoader color="gray" size={50} />
    </div>
  );
}
