import Link from "next/link";
import React from "react";

const Nav: React.FC<{ links: { label: string; href: string }[] }> = ({
  links,
}) => {
  return (
    <nav className="flex items-center justify-between h-16 bg-gray-800 text-white">
      <div className="flex items-center">
        <Link href="/">
          <span className="text-2xl font-bold p-4">My Website</span>
        </Link>
      </div>
      <ul className="flex space-x-4 mr-5">
        {links.map((link) => (
          <li key={link.href} className="">
            <Link href={link.href} legacyBehavior>
              <span className="hover:underline">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
