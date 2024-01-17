interface Photo {
  key: number;
  src: string;
  text: string;
  price: number;
  description: string;
  width: number;
  height: number;
}
const photos: Photo[] = [
  {
    key: 1,
    src: "/engp.jpg",
    text: "Angielski Podstawowy",
    price: 50,
    description:
      "LoremipsumLoremipsum LoremipsumLoremipsum LoremipsumLoremipsum LoremipsumLoremipsum ",
    width: 150,
    height: 150,
  },
  {
    key: 2,
    src: "/engr.jpg",
    text: "Angielski Rozszerzony",
    price: 50,
    description:
      "LoremipsumLoremipsum LoremipsumLoremipsumLoremipsum LoremipsumLoremipsum Loremipsum ",
    width: 150,
    height: 150,
  },
  {
    key: 3,
    src: "/matp.jpg",
    text: "Matematyka Podstawowa",
    price: 50,
    description:
      "Loremipsu mLorem ipsumL oremip sumL oremips umLorem ipsumLore mipsum Loremip sumLo remipsum ",
    width: 150,
    height: 150,
  },
  {
    key: 4,
    src: "/mat.jpg",
    text: "Matematyka",
    price: 50,
    description:
      "Loremipsum Loremip sumLoremipsumLo remipsum LoremipsumL oremipsu mLoremips umLoremipsum ",
    width: 150,
    height: 150,
  },
  {
    key: 5,
    src: "/matr.jpg",
    text: "Matematyka Rozszerzona",
    price: 50,
    description:
      "Loremipsum LoremipsumLorem ipsumLoremip sumLoremips umLoremi psumLoremipsumL oremipsum ",
    width: 150,
    height: 150,
  },
  {
    key: 6,
    src: "/fiz.jpg",
    text: "Fizyka Rozszerzona",
    price: 50,
    description:
      "Loremip sumLoremips umLoremips umLoremip sumLoremipsumL oremipsumLoremi psumL oremipsum ",
    width: 150,
    height: 150,
  },
];
export default photos;
