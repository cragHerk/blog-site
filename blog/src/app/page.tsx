import Image from "next/image";
import React from "react";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Section from "./components/section";
import Clients from "./components/clients";
import Footer from "./components/footer";

const HomePage: React.FC = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div>
      <Nav links={links} />
      <Hero />
      <Section />
      <Clients />
      <Footer />
    </div>
  );
};

export default HomePage;
