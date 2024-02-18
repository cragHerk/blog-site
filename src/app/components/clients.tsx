"use client";
import React, { useState, useEffect } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";

const clients = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO of Acme Inc.",
    opinion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Founder of Smith Corp.",
    opinion:
      "Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    title: "CTO of Tech Inc.",
    opinion:
      "Curabitur blandit tempus porttitor. Integer non felis. Praesent dapibus, neque id cursus faucibus.",
  },
  {
    id: 4,
    name: "Alice Davis",
    title: "COO of Data Inc.",
    opinion:
      "Mauris blandit aliquet e faucibus orci luclit neque sit amet aliquam vel, ullamcorper sit amet ligula.",
  },
  {
    id: 5,
    name: "Bob Brown",
    title: "CFO of Green Corp.",
    opinion:
      "Fusce dapibus, tellus ac cursus commodo, tortor  sem malesuada magna mollis euismod.",
  },
  {
    id: 6,
    name: "Charlie Green",
    title: "CMO of Blue Inc.",
    opinion:
      "Donec sed odio dui. Cras justo odio, dapibus ac facligula porta felis euismod semper.",
  },
];

const Clients = () => {
  const [currentClient, setCurrentClient] = useState(0);

  useEffect(() => {
    if (window.innerWidth > 768) {
      const interval = setInterval(() => {
        setCurrentClient((prevClient) => (prevClient + 1) % clients.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  });

  const displayedClients = clients.slice(currentClient, currentClient + 4);
  const remainingClients = clients.slice(0, Math.max(0, currentClient - 2));
  const allClients = [...displayedClients, ...remainingClients];

  return (
    <section id="clients" className="bg-top py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-wrap mx-4 justify-center ">
          {allClients.map((client) => (
            <div
              key={client.id}
              className="w-[320px] h-[400px] p-8 bg-semi-bot rounded-lg shadow-md flex flex-col items-center justify-center mx-4 my-4 "
            >
              <IoPersonCircleOutline color="#232323" size={50} />
              <div className="w-16 h-16 rounded-full overflow-hidden "></div>
              <div className="text-center mt-8">
                <h3 className="text-text text-xl font-medium mb-2">
                  {client.name}
                </h3>
                <p className="text-text text-base mb-4">{client.title}</p>
                <p className="text-text text-lg leading-relaxed mb-8">
                  {client.opinion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
