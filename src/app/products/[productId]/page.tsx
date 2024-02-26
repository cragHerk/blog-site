"use client";
import photos from "@/app/data/photos";
import Image from "next/image";
import ContactButton from "@/app/components/contact-button";
import NotFound from "@/app/not-found";
export default function ProductDetails({
  params,
}: {
  params: { productId: number };
}) {
  const photo = photos[params.productId - 1];
  if (!photo) {
    return <NotFound />;
  }
  return (
    <div className=" bg-mid w-screen  flex justify-center items-center px-6 pb-[50px] pt-[100px] md:py-[200px] ">
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

          <p className="text-sm text-text font-semibold mb-3 mx-auto">
            {photo.text}
          </p>
          <p className="text-sm text-text mb-3 mx-auto">
            {photo.price}$ /godzina
          </p>
        </div>
        <div className="text-text flex-1 p-3 md:ml-6 max-w-[300px] ">
          <h1 className="text-2xl my-4">Opis zajęć:</h1>
          <p className=" min-h-[150px] font-light text-pretty whitespace-pre-wrap m-3">
            {photo.description}
          </p>

          <ContactButton />
        </div>
      </div>
    </div>
  );
}
