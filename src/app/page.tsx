import React from "react";

import Hero from "./components/hero";
import Section from "./components/section";
import SectionHeader from "./components/section-header";
import Clients from "./components/clients";
import ClientsHeader from "./components/clients-header";
import FooterHeader from "./components/footer-header";
import Faq from "./components/faq";
import FaqHeader from "./components/faq-header";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <SectionHeader />
      <Clients />
      <ClientsHeader />
      <Section />
      <FaqHeader />
      <Faq />
      <FooterHeader />
    </>
  );
};

export default HomePage;
