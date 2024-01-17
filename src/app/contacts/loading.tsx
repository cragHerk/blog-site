import { FadeLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="bg-gray-300 w-screen h-screen flex items-center justify-center">
      <FadeLoader color="gray" aria-setsize={50} />
    </div>
  );
}
