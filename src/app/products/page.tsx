import Image from "next/image";
import Link from "next/link";
import photos from "../data/photos";
export const metadata = {
  title: "Oferta",
};
const Products = () => {
  return (
    <section
      id="section"
      className="bg-mid py-9 flex flex-col justify-center items-center min-h-[calc(80vh)] md:mb-[300px]"
    >
      <h1 className="text-3xl font-bold text-text mt-[65px] mb-6">
        Lekcje których udzielam :{" "}
      </h1>
      <div className="flex justify-center ">
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

              <p className="text-sm text-text font-semibold mb-3 mx-auto">
                {photo.text}
              </p>
              <p className="text-sm text-text mb-3 mx-auto">
                {photo.price}$ /godzina
              </p>

              <Link href={`/products/${photo.key}`}>
                <button
                  type="button"
                  className="bg-top font-bold  text-text py-2 px-4 rounded-lg hover:bg-semi-bot transition-colors duration-300"
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
