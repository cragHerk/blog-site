import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GrContactInfo } from "react-icons/gr";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="bg-top text-white ml-4 py-2 px-4 rounded-lg hover:bg-semi-bot transition-colors duration-300 font-bold"
      >
        Rezerwuję termin
      </button>
      <Popup isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
interface SpringModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}
const Popup: React.FC<SpringModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-top/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              setIsOpen(false)
            }
            className="bg-gradient-to-br from-bot to-semi-bot text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="relative z-10">
              <ul className="text-sm">
                <li className="mb-2 flex">
                  <AiFillPhone size={30} />
                  <Link href="tel:+1234567890" legacyBehavior>
                    <a className="ml-2">+1234567890</a>
                  </Link>
                </li>
                <li className="mb-2 flex">
                  <AiFillMail size={30} />
                  <Link href="mailto:library@example.com" legacyBehavior>
                    <a className="ml-2">library@example.com</a>
                  </Link>
                </li>

                <li className="mb-2">
                  <Link href="https://www.facebook.com/" legacyBehavior>
                    <a target="_blank" rel="noreferrer" className="flex">
                      <AiFillFacebook size={30} />
                      <span className="ml-2">Facebook</span>
                    </a>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="https://www.instagram.com/" legacyBehavior>
                    <a target="_blank" rel="noreferrer" className="flex">
                      <AiFillInstagram size={30} />
                      <span className="ml-2">Instagram</span>
                    </a>
                  </Link>
                </li>
              </ul>
              <a className="hidden md:block absolute right-[30px] top-[0px] w-[150px] text-xs">
                Aby umówić lekcje skontaktuj się używając wybranego komunikatora
              </a>
              <a className="hidden md:block absolute right-[30px] top-[30px]">
                <GrContactInfo size={140} />
              </a>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Wróć
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactButton;
