"use client";

import React from "react";
import Image from "next/image";

const Introduction = () => {
  const features = [
    "Prenez rendez-vous",
    "Consultez en ligne",
    "Gérez votre profil santé",
  ];
  const features2 = [
    "Gérez vos consultations.",
    "Suivez vos patients",
    "Organisez votre emploi de temps",
  ];

  const stats = [
    {
      value: "+250 000",
      description: "patients inscrits à travers tout le pays",
    },
    {
      value: "15 000",
      description:
        "médecins et professionnels de santé actifs sur la plateforme",
    },
    {
      value: "98%",
      description: "de taux de satisfaction des utilisateurs",
    },
    {
      value: "300 000",
      description:
        "consultations organisées via l’application depuis son lancement",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-[200px] py-16 bg-gray-50">
      {/* Title */}
      <h1 className="font-bold text-center text-3xl sm:text-4xl text-light-primary mb-16">
        Mon Toubib
      </h1>

      {/* Statistics Grid */}
      <div className="max-w-[1040px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mb-20">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="w-full max-w-[300px] min-h-[200px] bg-light-primary-container shadow-lg rounded-xl flex flex-col items-center justify-center text-center p-4 transition-transform duration-300 hover:scale-105"
          >
            <span className="text-2xl font-bold text-light-on-surface-variant">
              {stat.value}
            </span>
            <p className="text-gray-600 mt-2">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Patients + Doctors container (centered, no px inside) */}
      <div className="flex flex-col gap-12 max-w-[1040px] mx-auto">
        {/* Patients Section */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between bg-white shadow-2xl rounded-3xl overflow-hidden">
          {/* Text Column */}
          <div className="flex flex-col sm:items-start gap-7 w-full sm:w-1/2 p-8 sm:p-12">
            <div className="flex flex-col sm:items-start gap-2">
              <Image
                src="/assets/items/lightman.svg"
                alt="lightening man"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
              <span className="text-xl md:text-2xl font-bold text-gray-800">
                Pour les Patients,
              </span>
            </div>

            <p className="text-gray-700 text-base md:text-lg">
              Un accès simple, rapide et sécurisé à vos soins.
            </p>

            <div className="flex flex-col gap-2 sm:items-start">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-2">
                  <Image
                    src="/assets/items/checked.svg"
                    alt="check"
                    width={24}
                    height={24}
                    className="object-contain"
                    priority
                  />
                  <p className="text-sm md:text-base text-gray-700">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Images Column */}
          <div  className="bg-light-primary lg:max-h-[395px] md:max-h-[395px] sm:min-h-[395px] flex flex-row p-4 flex-nowrap justify-center   items-center gap-3 w-full sm:w-1/2 relative">
            {/* Phone 1 */}
            <div  className="relative lg:max-h-[340px] w-[110px] sm:w-[160px]  aspect-[128.78/256.96]  rounded-3xl mb-6">
              <div
                className="absolute inset-0 bg-center bg-no-repeat rounded-3xl"
                style={{
                  backgroundImage: "url('/assets/items/phonebg.svg')",
                  backgroundSize: "100% 100%",
                }}
              ></div>

              <Image
                src="/assets/items/phonface.svg"
                alt="phone1"
                fill
                className="object-contain relative z-10"
                priority
              />
            </div>

            {/* Phone 2 */}
            <div className="relative lg:max-h-[340px] w-[110px] sm:w-[160px]  aspect-[128.78/256.96]  rounded-3xl mt-6">
              <div
                className="absolute inset-0 bg-center bg-no-repeat rounded-3xl"
                style={{
                  backgroundImage: "url('/assets/items/phonebg.svg')",
                  backgroundSize: "100% 100%",
                }}
              ></div>

              <Image
                src="/assets/items/phoneface2.svg"
                alt="phone2"
                fill
                className="object-contain relative z-10"
                priority
              />
            </div>
          </div>
        </div>

        {/* Doctors Section */}
        <div className=" lg:max-h-[395px]  flex flex-col sm:flex-row items-center justify-between bg-white shadow-2xl rounded-3xl overflow-hidden">
          {/* Image Column */}
          <div className="flex justify-center bg-light-primary w-full sm:w-1/2  h-[395px]">
            <div className="relative w-[280px] sm:w-[280px] md:w-[240px] lg:w-[260px] aspect-[128.78/256.96]">
              <Image
                src="/assets/items/screen.svg"
                alt="phone"
                fill
                className="object-contain "
                priority
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="flex flex-col justify-center items-start gap-7 w-full sm:w-1/2 p-6 sm:p-12 h-full">
            <div className="flex flex-col items-start gap-2">
              <Image
                src="/assets/items/ecout.svg"
                alt="doctor icon"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
              <span className="text-xl md:text-2xl font-bold text-gray-800">
                Pour les Médecins,
              </span>
            </div>

            <p className="text-gray-700 text-base md:text-lg text-left">
              Une solution tout-en-un pour gérer votre activité.
            </p>

            <div className="flex flex-col gap-2 items-start">
              {features2.map((feature, index) => (
                <div key={index} className="flex gap-2">
                  <Image
                    src="/assets/items/checked.svg"
                    alt="check"
                    width={24}
                    height={24}
                    className="object-contain"
                    priority
                  />
                  <p className="text-sm md:text-base text-gray-700">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
