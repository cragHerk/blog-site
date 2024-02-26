"use client";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const links = [
  { label: "Strona Główna", href: "/" },
  { label: "Oferta", href: "/products" },
  { label: "Kontakt", href: "/contact" },
];
const Nav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="z-10 fixed w-screen flex items-center justify-between h-16 bg-top text-text ">
      <div className="flex items-center">
        <Link href="/">
          <span className="text-2xl font-bold p-4">HazukaMatematyka</span>
        </Link>
      </div>

      <ul className="hidden md:flex space-x-4 mr-8">
        {links.map((link) => (
          <li
            key={link.href}
            className="cursor-pointer bg-mid w-18 p-2 bg-white flex rounded"
          >
            <Link href={link.href} legacyBehavior>
              <span className="hover:underline ">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      {/*mobile nav */}
      <div className="md:hidden  mr-8 z-10" onClick={handleNav}>
        {nav ? <IoMdClose size={30} /> : <GiHamburgerMenu size={30} />}
      </div>
      <ul
        className={
          nav
            ? "fixed md:hidden right-0 top-[60px] w-[100%] h-screen   ease-in-out duration-500"
            : "ease-in-out w-[100%] duration-500 fixed  right-0 top-[-100%]"
        }
      >
        {links.map((link) => (
          <li
            key={link.href}
            className="cursor-pointer bg-mid w-18 p-2 bg-white flex "
          >
            <Link href={link.href} legacyBehavior>
              <span className="hover:underline ">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
