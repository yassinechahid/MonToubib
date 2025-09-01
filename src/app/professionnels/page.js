"use client";

import React from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import researchLabAnimation from "@/assets/animations/Researchlab.json";


const Professionnels = () => {
  const checkImage = (
    <Image src="/assets/items/check.svg" width={24} height={24} alt="check" />
  );
  const choices = [
    { choice: "Gestion des ordonnances envoyées par les patients", image:"/assets/items/file.svg"},
    { choice: "Gestion des stocks et des livraisons", image:"/assets/pictures/box.svg"},
    { choice: "Localisation avec itinéraire GPS", image:"/assets/items/location.svg"},
  ];
  const analyses = [
    { choice: "Prise de rendez-vous pour les analyses sur place ou à domicile", image:"/assets/items/agenda.svg"},
    { choice: "Intégration des résultats d’analyses dans le dossier patient", image:"/assets/items/ecout.svg"},
    { choice: "Transmission des résultats d’analyse aux médecins", image:"/assets/pictures/send.svg"},
    { choice: "Localisation avec itinéraire GPS", image:"/assets/items/location.svg"},
  ];

  const radiologue = [
    { choice: "Prise de rendez-vous pour une imagerie", image:"/assets/items/agenda.svg"},
    { choice: "Intégration des images médicales dans le dossier patient", image:"/assets/items/ecout.svg"},
    { choice: "Accès aux comptes rendus d’imagerie par les médecins", image:"/assets/items/file.svg"},
    { choice: "Transmission des radios et des résultats aux médecins", image:"/assets/pictures/send.svg"},
    { choice: "Localisation avec itinéraire GPS", image:"/assets/items/location.svg"},
  ];

  const fonctinalitePrincipale = [
    {
      image: "/assets/items/agenda.svg",
      paragraph: "Prise de rendez-vous en ligne ou en présentiel",
    },
    {
      image: "/assets/items/checkscreen.svg",
      paragraph:
        "Téléconsultation sécurisée avec partage de documents médicaux",
    },
    {
      image: "/assets/items/file.svg",
      paragraph: "Ordonnances numériques envoyées directement en pharmacie",
    },
    {
      image: "/assets/items/microscope.svg",
      paragraph: "Accès aux résultats de laboratoire et imagerie médicale",
    },
    {
      image: "/assets/items/floders.svg",
      paragraph:
        "Gestion du dossier médical personnel avec permissions personnalisées",
    },
    {
      image: "/assets/items/alarm.svg",
      paragraph:
        "Alertes et rappels automatisés des RDV et des prises de médicaments pour garantir un suivi optimal",
    },
    {
      image: "/assets/items/location.svg",
      paragraph:
        "Localisation et choix des acteurs de santé disponibles les plus proches avec itinéraire GPS",
    },
  ];

  return (
    <div className="bg-light-background pt-28 w-full flex flex-col px-4 sm:px-6 lg:px-[200px]">
      {/* Title & Intro */}
      <div className="w-full">
        <h1 className=" text-headline-medium font-normal text-light-primary text-left">
          Professionnels
        </h1>
        <p className="pb-8 mt-3 text-gray-700 text-left">
          {`Les pharmacies, laboratoires, cliniques et autres acteurs peuvent s'intégrer facilement à Mon Toubib.`}
        </p>
      </div>

      {/* Info Box */}
      <div className="flex flex-wrap items-center justify-between bg-light-secondary-container rounded-3xl pt-6 px-12 pb-6 gap-8">
        {/* Text Section */}
        <div className="flex-1 min-w-[280px]">
          <h1 className="font-normal text-light-primary">
           Rejoignez Mon Toubib en tant que Partenaire!
          </h1>
          <p className="font-normal text-light-on-surface-variant mt-2">
            {`Intégrez facilement votre pharmacie, laboratoire ou clinique à notre plateforme et bénéficiez d'outils innovants pour optimiser la gestion de vos services.`}
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center min-w-[250px]">
          <Image
            src="/assets/pictures/doctor1.svg"
            alt="mon toubib"
            width={247}
            height={267}
          />
        </div>
      </div>

      {/* Mission */}
      <div className="pt-12 pb-12 w-full text-center">
        <span className="font-roboto font-normal text-[28px] leading-9 tracking-[0px] text-center align-middle text-headline-medium text-light-primary">
          Pharmacies
        </span>
      </div>
      <div className="flex flex-wrap items-center justify-between rounded-3xl  px-28  gap-8">
        {/* Text Section */}
        <div className="flex-1 min-w-[280px]">
          {choices.map((choice, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <Image src={choice.image} width={24} height={24} alt="check" />
              <p>{choice.choice}</p>
            </div>
          ))}
        </div>

        
      </div>

      <div className="pt-12 pb-12 w-full text-center">
        <span className="font-roboto font-normal text-[28px] leading-9 tracking-[0px] text-center align-middle text-headline-medium text-light-primary">
          {`Laboratoires d'Analyses Médicales`}
        </span>
      </div>
            <div className="flex flex-wrap items-center justify-between rounded-3xl  px-28  gap-8">
              {/* Text Section */}
              <div className="flex-1 min-w-[250px]">
                {analyses.map((analyse, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Image src={analyse.image} width={24} height={24} alt="check" />
                    <p>{analyse.choice}</p>
                  </div>
                ))}
              </div>
      
              {/* Image Section */}
              <div className="flex-1 flex justify-center w-[250px]">
                <Lottie animationData={researchLabAnimation} loop={true} />

              </div>
            </div>
            <div className="pt-12 pb-12 w-full text-center">
        <span className="font-roboto font-normal text-[28px] leading-9 tracking-[0px] text-center align-middle text-headline-medium text-light-primary">
          {`Centres de Radiologie`}
        </span>
      </div>
      <div className="flex flex-wrap items-center justify-between rounded-3xl  px-28  gap-8">
              {/* Text Section */}
              <div className="flex-1 min-w-[250px]">
                {radiologue.map((radio, index) => (
                  <div key={index} className="flex items-center gap-2 mb-2">
                    <Image src={radio.image} width={24} height={24} alt="check" />
                    <p>{radio.choice}</p>
                  </div>
                ))}
              </div>
            </div>
    </div>
  );
};

export default Professionnels;
