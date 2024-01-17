import Image from "next/image";
import Link from "next/link";
import photos from "../data/photos";

const Products = () => {
  return (
    <section
      id="section"
      className="bg-gray-300 py-9 flex flex-col justify-center items-center"
    >
      <h1 className="text-3xl font-bold text-slate-700 mt-[65px] mb-6">
        Lekcje których udzielam :{" "}
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8">
          {photos.map((photo) => (
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

              <Link href={`/products/${photo.key}`}>
                <button
                  type="button"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  Zarezerwuj
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
