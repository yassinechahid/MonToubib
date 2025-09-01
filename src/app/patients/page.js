import React from "react";
import Image from "next/image";

const AboutPage = () => {
  const checkImage = (
    <Image src="/assets/items/check.svg" width={24} height={24} alt="check" />
  );
  const choices = [
    { choice: "Fonctionnalités principales" },
    { choice: "Suivi médical optimisé et personnalisé" },
    { choice: "Prise de rendez-vous simplifiée" },
    { choice: "Alertes de suivi et rappels automatiques" },
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
          Patients
        </h1>
        <p className="pb-8 mt-3 text-gray-700 text-left">
          Explorez les fonctionnalités de notre application et connectez-vous
          facilement pour accéder à vos soins médicaux!
        </p>
      </div>

      {/* Info Box */}
      <div className="flex flex-wrap items-center justify-between bg-light-secondary-container rounded-3xl pt-6 px-12 pb-6 gap-8">
        {/* Text Section */}
        <div className="flex-1 min-w-[280px]">
          <h1 className="font-normal text-light-primary">
            Accédez à vos soins en un instant !
          </h1>
          <p className="font-normal text-light-on-surface-variant mt-2">
            {`Connectez-vous dès maintenant pour profiter d'une gestion simplifiée
            de votre santé, prendre rendez-vous, consulter votre médecin à
            distance, et bien plus encore.`}
          </p>
          <button className="mt-4 rounded-[100px] h-[40px] w-36 bg-light-primary text-white">
            Se connecter
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center min-w-[250px]">
          <Image
            src="/assets/items/Doc.svg"
            alt="mon toubib"
            width={247}
            height={267}
          />
        </div>
      </div>

      {/* Mission */}
      <div className="mt-12 w-full text-center">
        <span className="font-roboto font-normal text-[28px] leading-9 tracking-[0px] text-center align-middle text-headline-medium text-light-primary">
          Pourquoi choisir Mon Toubib ?
        </span>
      </div>
      <div className="flex flex-wrap items-center justify-between rounded-3xl pt-6 px-28 pb-6 gap-8">
        {/* Text Section */}
        <div className="flex-1 min-w-[280px]">
          <h1 className="font-normal text-light-primary mb-4">
            Accédez à vos soins en un instant !
          </h1>
          {choices.map((choice, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              {checkImage}
              <p>{choice.choice}</p>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center min-w-[250px]">
          <Image
            src="/assets/items/emergency.svg"
            alt="mon toubib"
            width={250}
            height={250}
          />
        </div>
      </div>

      <div className="mt-12 w-full text-center">
        <span className="font-roboto font-normal text-[28px] leading-9 tracking-[0px] text-center align-middle text-headline-medium text-light-primary">
          Fonctionnalités principales
        </span>
      </div>
      <div className="max-w-[1040px] mx-auto flex flex-wrap justify-center p-2 gap-4 mt-11 mb-20">
        {fonctinalitePrincipale.map((fonctionprincipal, index) => (
          <div
            key={index}
            className="w-full sm:w-[44%] md:w-[30%] min-h-[192px] bg-light-surface-container-lowest shadow-lg rounded-xl flex flex-col items-center justify-center text-center p-4 transition-transform duration-300 hover:scale-105"
          >
            <div>
              <Image
                src={fonctionprincipal.image}
                alt="lightening man"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <p className="text-gray-600 font-normal mt-2 text-base leading-6 tracking-[0.5px] text-center align-middle">
              {fonctionprincipal.paragraph}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
