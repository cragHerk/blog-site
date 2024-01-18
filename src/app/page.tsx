import React from "react";

import Hero from "./components/hero";
import Section from "./components/section";
import Clients from "./components/clients";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Section />
      <Clients />
    </>
  );
};

export default HomePage;
