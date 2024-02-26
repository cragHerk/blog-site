import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";
import Link from "next/link";
export const metadata = {
  title: "Kontakt",
};
export default function Contacts() {
  return (
    <div className="bg-mid text-text flex flex-col justify-center items-center h-screen">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Skontaktuj się, aby zaplanować lekcje
        </h2>
        <ul className="list-none">
          <li className="mb-4 md:mb-6 lg:mb-8">
            <Link href="https://www.facebook.com/" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <span className="flex items-center">
                  <AiFillFacebook size={30} />
                  <span className=" ml-4">Facebook</span>
                </span>
              </a>
            </Link>
          </li>
          <li className="mb-4 md:mb-6 lg:mb-8">
            <Link href="mailto:library@example.com" legacyBehavior>
              <a>
                <span className="flex items-center">
                  <AiFillMail size={30} />
                  <span className=" ml-4">library@example.com</span>
                </span>
              </a>
            </Link>
          </li>
          <li className="mb-4 md:mb-6 lg:mb-8">
            <Link href="tel:+1234567890" legacyBehavior>
              <a className="flex items-center">
                <AiFillPhone size={30} />
                <span className=" ml-4">+1234567890</span>
              </a>
            </Link>
          </li>
          <li className="mb-4 md:mb-6 lg:mb-8">
            <Link href="https://www.instagram.com/" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <span className="flex items-center">
                  <AiFillInstagram size={30} />
                  <span className=" ml-4">Instagram</span>
                </span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
