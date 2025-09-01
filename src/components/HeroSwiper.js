"use client";

import { useState } from "react";
import Image from "next/image";

const slides = [
  {
    title: "Révolutionnez votre accès aux soins!",
    text: "Mon Toubib est une solution innovante qui facilite l'accès aux soins médicaux à travers une plateforme numérique complète et sécurisée, que vous soyez patient, médecin ou professionnel de santé.",
    image: "/assets/items/aboveitemlogo.svg",
  },
  {
    title: "Offre spéciale: Consultation à prix réduit !",
    text: "Réservez dès maintenant votre consultation en ligne ou en présentiel avec des médecins qualifiés et profitez d’une réduction exclusive de 20%",
    image: "/assets/items/aboveitemlogo2.svg",
    button: "Rèservez maintenant",
  },
];

export default function HeroSwiper() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current < slides.length - 1) setCurrent(current + 1);
  };

  const handleDotClick = (index) => setCurrent(index);

  return (
    <div className="w-full mt-[70px]">
      {/* Slide Background */}
      <div className="w-full bg-light-secondary-container py-12">
        <div className="w-full max-w-[1040px] mx-auto px-6 sm:px-8 md:px-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          
          {/* Text Section */}
<div className="flex flex-col justify-center items-start gap-4 text-left max-w-md w-full">
  <h1 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl  text-light-primary leading-snug">
    {slides[current].title}
  </h1>
  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#49454F] leading-relaxed w-full">
    {slides[current].text}
  </p>
  {slides[current].button && (
  <div className="mt-2">
    <button className="inline-flex items-center justify-center px-6 py-2 bg-[#65558F] text-white font-semibold rounded-full whitespace-nowrap">
      {slides[current].button}
    </button>
  </div>
)}

</div>


          {/* Image Section */}
          <div className="flex justify-center md:justify-end mt-6 md:mt-0">
            <Image
              src={slides[current].image}
              alt="Hero illustration"
              width={280}
              height={280}
              className="object-contain sm:w-[300px] md:w-[344px] md:h-[344px]"
              priority
            />
          </div>
        </div>
      </div>

      {/* Navigation Arrows & Dots */}
      <div className="flex items-center justify-center gap-4 mt-6">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          disabled={current === 0}
          className={`w-[80px] h-[80px] sm:w-[80px] sm:h-[80px] flex items-center justify-center rounded-full ${
            current === 0 ? "opacity-50" : "opacity-100"
          }`}
        >
          <Image
            src="/assets/items/leftarrow.svg"
            alt="Left Arrow"
            width={80}
            height={80}
            className="object-contain"
          />
        </button>

        {/* Dots */}
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full cursor-pointer transition-colors duration-300 ${
              index === current ? "bg-[#65558F]" : "bg-gray-400"
            }`}
          ></div>
        ))}

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          disabled={current === slides.length - 1}
          className={`w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] flex items-center justify-center rounded-full ${
            current === slides.length - 1 ? "opacity-50" : "opacity-100"
          }`}
        >
          <Image
            src="/assets/items/rightArow.svg"
            alt="Right Arrow"
            width={50}
            height={50}
            className="object-contain"
          />
        </button>
      </div>
    </div>
  );
}
