import React from "react";
import Image from "next/image";
const ServicesFonction = () => {
  const services = [
    {
      image: "/assets/items/agenda.svg",
      title: "Prise de rendez-vous simplifiée",
      paragraph: "Planifiez vos consultations facilement",
    },
    {
      image: "/assets/items/checkscreen.svg",
      title: "Téléconsultation sécurisée",
      paragraph: "Consultez vos patients sans quitter votre domicile",
    },
    {
      image: "/assets/items/floders.svg",
      title: "Gestion des dossiers médicaux",
      paragraph: "Centralisez tous les antécédents médicaux",
    },
    {
      image: "/assets/items/file.svg",
      title: "Ordonnances numériques",
      paragraph: "Envoyez vos prescriptions directement en pharmacie",
    },
    {
      image: "/assets/items/microscope.svg",
      title: "Résultats de laboratoire et imagerie médicale",
      paragraph: "Accessibles depuis votre compte",
    },
  ];
  return (
    <div className="px-4 sm:px-6 lg:px-[200px]">
      <div className="flex items-center justify-center m-16 ">
        <h1 className="w-full max-w-[1040px] text-2xl sm:text-3xl md:text-4xl font-bold text-light-primary text-center">
          Services et Fonctionnalités
        </h1>
      </div>

      <div
        className="max-w-[1040px] mx-auto flex flex-wrap justify-center gap-4 mb-20"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full sm:w-[48%] md:w-[32%] min-h-[232px] bg-light-surface-container-lowest shadow-lg rounded-xl flex flex-col items-center justify-center text-center p-4 transition-transform duration-300 hover:scale-105"
          >
            <div>
              <Image
                src={service.image}
                alt="lightening man"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl font-bold text-light-primary">
              {service.title}
            </span>
            <p className="text-gray-600 mt-2">{service.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesFonction;
