"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

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
      "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
  },
  {
    id: 5,
    name: "Bob Brown",
    title: "CFO of Green Corp.",
    opinion:
      "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.",
  },
  {
    id: 6,
    name: "Charlie Green",
    title: "CMO of Blue Inc.",
    opinion:
      "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper.",
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
    <section id="clients" className="bg-gray-300 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl text-gray-800 font-heading mb-12">
          What our clients say
        </h2>
        <div className="flex flex-wrap mx-4 justify-center">
          {allClients.map((client) => (
            <div
              key={client.id}
              className="w-[320px] h-[400px] p-8 bg-white rounded-lg shadow-md flex flex-col items-center justify-center mx-4 my-4 "
            >
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-400"></div>
              <div className="text-center mt-8">
                <h3 className="text-gray-800 text-xl font-medium mb-2">
                  {client.name}
                </h3>
                <p className="text-gray-600 text-base mb-4">{client.title}</p>
                <p className="text-gray-800 text-lg leading-relaxed mb-8">
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
