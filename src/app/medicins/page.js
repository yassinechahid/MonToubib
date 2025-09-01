"use client";
import React, { useState } from "react";
import Image from "next/image";

const MedicinPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const checkImage = (
    <Image src="/assets/items/check.svg" width={24} height={24} alt="check" />
  );

  const choices = [
    "Intuitif, rapide et sécurisé",
    "Plateforme conçue pour simplifier le travail des médecins",
    "Gestion complète des consultations et du suivi patient",
    "Outils performants pour optimiser la pratique des médecins",
    "Meilleure coordination avec les collègues de santé",
  ];

  const fonctinalitePrincipale = [
    {
      image: "/assets/items/clinical_notes.svg",
      paragraph: "Gestion des consultations et dossiers patients",
    },
    {
      image: "/assets/items/health_and_safety.svg",
      paragraph: "Accès aux antécédents médicaux selon permissions.",
    },
    {
      image: "/assets/items/microscope.svg",
      paragraph: "Intégration avec laboratoires et centres de radiologie",
    },
    {
      image: "/assets/items/event_available.svg",
      paragraph: "Optimisation des rendez-vous avec itinéraire GPS",
    },
    {
      image: "/assets/items/file.svg",
      paragraph: "Émission d'ordonnances numériques sécurisées",
    },
    {
      image: "/assets/items/alarm.svg",
      paragraph: "Alertes et rappels automatiques des RDV et prescriptions",
    },
    {
      image: "/assets/items/schedule.svg",
      paragraph:
        "Définition des plages horaires pour téléconsultations et consultations en présentiel",
    },
    {
      image: "/assets/items/location.svg",
      paragraph: "Localisation et itinéraire GPS pour les patients",
    },
    {
      image: "/assets/items/groups.svg",
      paragraph: "Coordination efficace avec d'autres professionnels de santé",
    },
  ];

  return (
    <div className="bg-light-background pt-28 w-full flex flex-col px-4 sm:px-6 lg:px-[200px] relative">
      {/*Title & Intro */}
      <div className="w-full">
        <h1 className="text-headline-medium font-normal text-light-primary text-left">
          Médecins
        </h1>
        <p className="mt-3 text-gray-700 text-left mb-7">
          Explorez les fonctionnalités de notre application et connectez-vous
          facilement pour accéder à vos soins médicaux!
        </p>
      </div>

      {/* Info Box */}
      <div className="flex flex-wrap items-center justify-between bg-light-secondary-container rounded-3xl pt-6 px-6 sm:px-12 pb-6 gap-8">
        {/* Text Section */}
        <div className="flex-1 min-w-[280px]">
          <h1 className="font-normal text-light-primary">
            Simplifiez votre pratique médicale !
          </h1>
          <p className="font-normal text-light-on-surface-variant mt-2">
            {"Connectez-vous à l'application pour gérer vos consultations, suivre"}
            {"vos patients à distance, et accéder à des outils professionnels"}
            {"tout-en-un." }
          </p>

          {/* Buttons */}
          <div className="mt-4 flex flex-wrap gap-4">
            <button className="flex-1 min-w-[120px] max-w-[180px] px-4 py-2 rounded-[100px] bg-light-primary text-white text-center">
              Se connecter
            </button>
            <button
              onClick={() => setShowPopup(true)}
              className="flex-1 min-w-[120px] max-w-[180px] px-4 py-2 rounded-[100px] border-2 border-light-primary text-light-primary bg-transparent text-center hover:bg-light-primary hover:text-white transition-colors duration-300"
            >
              Créer un compte
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center min-w-[250px]">
          <Image
            src="/assets/items/doctor2.svg"
            alt="mon toubib"
            width={247}
            height={267}
          />
        </div>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full p-6 relative">
            <h2 className="text-xl font-bold mb-4 text-center">
              {"Demande de Création d'un compte"}
            </h2>

            {/* Home / Femme */}
            <div className="flex size-7 fon justify-start pl-3 gap-64 mb-4 items-center">
              <label className="flex items-center gap-2 cursor-pointer text-lg">
                <input
                  type="radio"
                  name="gender"
                  value="Home"
                  className="form-radio w-4 h-4 text-light-primary"
                  defaultChecked
                />
                <span>Home</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-lg">
                <input
                  type="radio"
                  name="gender"
                  value="Femme"
                  className="form-radio w-4 h-4 text-light-primary"
                />
                <span>Femme</span>
              </label>
            </div>

            {/* INPE */}
            <input
              type="text"
              placeholder="INPE"
              className=" bg-light-surface-container-highest border rounded-md p-2 mb-4 w-[300px]"
            />

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                placeholder="NOM"
                className="border rounded-md p-2 w-[300px] bg-light-surface-container-highest"
              />
              <input
                type="text"
                placeholder="Prénom"
                className="border rounded-md p-2 w-[300px] bg-light-surface-container-highest"
              />
              <input
                type="email"
                placeholder="Email"
                className="border rounded-md p-2 w-[300px] bg-light-surface-container-highest"
              />
              <input
                type="tel"
                placeholder="Téléphone"
                className="border rounded-md p-2 w-[300px] bg-light-surface-container-highest"
              />
              <input
                type="text"
                placeholder="Adresse"
                className="border rounded-md p-2 w-[300px] bg-light-surface-container-highest"
              />
              <input
                type="date"
                placeholder="Date de naissance"
                className="border rounded-md p-2 w-[300px] bg-light-surface-container-highest"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 border rounded-2xl hover:bg-gray-100 transition"
              >
                Annuler
              </button>
              <button className="px-4 py-2 bg-light-primary text-white rounded-2xl hover:bg-blue-700 transition">
                Envoyer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mission */}
      <div className="mt-12 w-full text-center">
        <span className="font-roboto font-normal text-[28px] leading-9 tracking-[0px] text-headline-medium text-light-primary">
          Pourquoi rejoindre Mon Toubib ?
        </span>
      </div>
      <div className="flex flex-wrap items-center justify-between rounded-3xl pt-6 px-28 pb-6 gap-8">
        {/* Text Section */}
        <div className="flex-1 min-w-[280px] space-y-2">
          {choices.map((choice, index) => (
            <div key={index} className="flex items-center gap-2">
              {checkImage}
              <p>{choice}</p>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center min-w-[250px]">
          <Image
            src="/assets/items/phoneApps.svg"
            alt="mon toubib"
            width={250}
            height={250}
          />
        </div>
      </div>

      <div className="mt-12 w-full text-center">
        <span className="font-roboto font-normal text-[28px] leading-9 tracking-[0px] text-headline-medium text-light-primary">
          Fonctionnalités principales
        </span>
      </div>
      <div className="max-w-[1040px] mx-auto flex flex-wrap justify-center p-2 gap-4 mt-11 mb-20">
        {fonctinalitePrincipale.map((fonctionprincipal, index) => (
          <div
            key={index}
            className="w-full sm:w-[44%] md:w-[30%] min-h-[192px] bg-light-surface-container-lowest shadow-lg rounded-xl flex flex-col items-center justify-center text-center p-4 transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={fonctionprincipal.image}
              alt="icon"
              width={40}
              height={40}
              className="object-contain mb-2"
            />
            <p className="text-gray-600 font-normal mt-2 text-base leading-6 tracking-[0.5px] text-center">
              {fonctionprincipal.paragraph}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicinPage;
