import Image from "next/image";
export default function NotFound() {
  return (
    <div className="bg-gray-300 w-screen h-screen flex items-center justify-center">
      <Image alt="404" src={"/404.png"} width={500} height={500} />
    </div>
  );
}
