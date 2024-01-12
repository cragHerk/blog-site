import Image from "next/image";
const photos = [
  {
    key: 1,
    src: "/engp.jpg",
    text: "Angielski Podstawowy",
    width: 150,
    height: 150,
  },
  {
    key: 2,
    src: "/engr.jpg",
    text: "Angielski Rozszerzony",
    width: 150,
    height: 150,
  },
  {
    key: 3,
    src: "/matp.jpg",
    text: "Matematyka Podstawówka",
    width: 150,
    height: 150,
  },
  { key: 4, src: "/mat.jpg", text: "Matematyka", width: 150, height: 150 },
  {
    key: 5,
    src: "/matr.jpg",
    text: "Matematyka Rozszerzona",
    width: 150,
    height: 150,
  },
  {
    key: 6,
    src: "/fiz.jpg",
    text: "Fizyka Rozszerzona",
    width: 150,
    height: 150,
  },
];
const Section = () => {
  return (
    <section className="bg-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {photos.map((photo) => (
            <div
              key={photo.key}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center "
            >
              <Image
                src={photo.src}
                alt={`Photo ${photo.key}`}
                width={photo.width}
                height={photo.height}
                className="w-full h-auto mb-4 rounded"
              />
              <h3 className="text-xl font-bold mb-4">Element {photo.key}</h3>
              <p className="text-gray-700 ">{photo.text}</p>
              <button
                type="button"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Zarezerwuj
              </button>
              <a className="text-xs" href="http://www.freepik.com ">
                Designed by macrovector / Freepik
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
