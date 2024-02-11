import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";
import { FaGithubAlt } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-bot text-white py-6 px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold mb-4">Contact</h2>
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
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold mb-4">Social</h2>
          <ul className="text-sm">
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
        </div>
        <div className="text-center md:text-left">
          <ul className="text-sm">
            <li className="mb-2">
              <Link href="https://cragherkdev.netlify.app/" legacyBehavior>
                <a target="_blank" rel="noreferrer" className="flex p-4">
                  <FaGithubAlt size={30} />
                  <span className="ml-2">Made by cragHerk</span>
                </a>
              </Link>
            </li>
            <li className="mb-2">
              <a href="http://www.freepik.com" className="p-4">
                Designed by macrovector / Freepik
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
