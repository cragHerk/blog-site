import React from "react";
import Head from "next/head";
import Hero from "./components/hero";
import Section from "./components/section";
import Clients from "./components/clients";

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Korepetycje</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Section />
      <Clients />
    </>
  );
};

export default HomePage;
