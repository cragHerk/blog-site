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
    src: "/matp.jpg",
    text: "Matematyka Podstawowa",
    price: 50,
    description:
      "Loremipsu mLorem ipsumL oremip sumL oremips umLorem ipsumLore mipsum Loremip sumLo remipsum ",
    width: 150,
    height: 150,
  },
  {
    key: 2,
    src: "/mat.jpg",
    text: "Matematyka Maturalna",
    price: 50,
    description:
      "Loremipsum Loremip sumLoremipsumLo remipsum LoremipsumL oremipsu mLoremips umLoremipsum ",
    width: 150,
    height: 150,
  },
  {
    key: 3,
    src: "/matr.jpg",
    text: "Matematyka Rozszerzona",
    price: 50,
    description:
      "Loremipsum LoremipsumLorem ipsumLoremip sumLoremips umLoremi psumLoremipsumL oremipsum ",
    width: 150,
    height: 150,
  },
];
export default photos;
