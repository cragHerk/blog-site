"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import photos from "../data/photos";
import { RingLoader } from "react-spinners";

const Section = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(Array(photos.length).fill(false));

  const handleClick = (index: number) => {
    setIsLoading((prevIsLoading) => {
      const newIsLoading = [...prevIsLoading];
      newIsLoading[index] = true;
      return newIsLoading;
    });

    setTimeout(() => {
      setIsLoading((prevIsLoading) => {
        const newIsLoading = [...prevIsLoading];
        newIsLoading[index] = false;
        return newIsLoading;
      });
      router.push(`/products/${photos[index].key}`);
    }, 1000);
  };

  return (
    <section id="section" className="bg-gray-300 py-12">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8">
          {photos.map((photo, index) => (
            <div
              key={photo.key}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col align-middle items-center max-w-[330px] "
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

              <button
                type="button"
                className="flex justify-center items-center w-[120px] h-[40px] bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                onClick={() => handleClick(index)}
              >
                <span className={`${isLoading[index] ? "hidden" : "block"}`}>
                  Zarezerwuj
                </span>
                {isLoading[index] && <RingLoader color="white" size={30} />}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
