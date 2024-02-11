import React from "react";

import Hero from "./components/hero";
import Section from "./components/section";
import SectionHeader from "./components/section-header";
import Clients from "./components/clients";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <SectionHeader />
      <Section />

      <Clients />
    </>
  );
};

export default HomePage;
