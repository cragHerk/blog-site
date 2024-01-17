"use client";
import photos from "@/app/data/photos";
import Image from "next/image";
import ContactButton from "@/app/components/contact-button";
export default function ProductDetails({
  params,
}: {
  params: { productId: number };
}) {
  const photo = photos[params.productId - 1];
  return (
    <div className="bg-gray-300 w-screen h-screen flex justify-center items-center">
      <div className="md:flex bg-white rounded-lg shadow-lg p-6">
        <div
          key={photo.key}
          className=" flex flex-col align-middle items-center max-w-[330px] p-3 "
        >
          <Image
            src={photo.src}
            alt={`Photo ${photo.key}`}
            width={photo.width}
            height={photo.height}
            className="w-[150px] h-[150px] mb-4 rounded"
          />

          <p className="text-sm text-gray-700 mb-3 mx-auto">{photo.text}</p>
          <p className="text-sm text-gray-700 mb-3 mx-auto">
            {photo.price}$ /godzina
          </p>
        </div>
        <div className="text-gray-700 flex-1 p-3 md:ml-6 max-w-[300px] ">
          <h1 className="text-2xl my-4">Opis zajęć:</h1>
          <p className=" min-h-[150px] text-pretty whitespace-pre-wrap m-3">
            {photo.description}
          </p>

          <ContactButton />
        </div>
      </div>
    </div>
  );
}
