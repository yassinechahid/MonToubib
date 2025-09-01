import React from "react";
import Image from "next/image";

const Actualites = () => {
  const actualites = [
    {
      actualiteDAte: "17 février 2025",
      title: "La Télémédecine au Maroc : Une Révolution Accessible",
      paragraph:
        "La télémédecine est en plein essor au Maroc, offrant une solution moderne et pratique pour accéder aux soins médicaux sans quitter votre.....",
      photo: "/assets/items/image1.svg",
      alt: "image1",
    },
    {
      actualiteDAte: "17 février 2025",
      title: "5 Conseils pour Préparer Votre Première Téléconsultation",
      paragraph:
        "Votre première téléconsultation approche ? Voici nos meilleurs conseils pour vous préparer et en tirer pleinement parti......",
      photo: "/assets/items/image2.svg",
      alt: "image2",
    },
    {
      actualiteDAte: "17 février 2025",
      title: "L'Importance de la Gestion Numérique des Dossiers Médicaux",
      paragraph:
        "Les dossiers médicaux numériques sont une avancée majeure dans le domaine de la santé. Découvrez pourquoi centraliser vos informations....",
      photo: "/assets/items/image3.svg",
      alt: "image3",
    },
  ];

  return (
    <div className="flex justify-center px-4 lg:px-[200px]">
      <div className="w-full max-w-[1040px]">
        {/* Title */}
        <div className="flex items-center justify-center my-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-light-primary text-center">
            Actualités
          </h1>
        </div>

        {/* Actualités cards */}
        <div className="flex flex-col gap-6">
          {actualites.map((act, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row w-full
               bg-light-surface-container-lowest rounded-3xl shadow-xl
                overflow-hidden gap-4
                p-4 sm:p-0" // padding only on small screens
            >
              {/* Image */}
              <div className="flex-shrink-0 w-full sm:w-[364px] h-[240px] sm:h-[316px] rounded-[24px] sm:rounded-none overflow-hidden">
                <Image
                  src={act.photo}
                  alt={act.alt}
                  width={380}
                  height={240}
                  className="w-full h-full object-cover rounded-[24px] sm:rounded-none"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-evenly flex-1 gap-1">
                <p className="text-sm text-gray-500">{act.actualiteDAte}</p>
                <h4 className="text-xl font-semibold">{act.title}</h4>
                <p className="text-gray-700 text-sm md:text-base">{act.paragraph}</p>
                <button className="self-start bg-light-primary text-white px-4 py-2 rounded-full hover:bg-light-high-contrast-primary-fixed transition mt-2">
                  En savoir plus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Actualites;
