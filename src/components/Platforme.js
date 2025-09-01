import React from 'react'
import Image from "next/image";

const Platforme = () => {
  return (
    <div className="flex justify-center px-4 lg:px-[200px]">
      <div className='w-full max-w-[1040px]'>
        <div className="flex items-center justify-center m-16 ">
          <h1 className="w-full max-w-[1040px] text-2xl sm:text-3xl md:text-4xl font-bold text-light-primary text-center">
            Plateforme Web & Mobile
          </h1>
        </div>

        <div className="mt-8">
          <p className="text-center text-light-on-surface font-normal text-base sm:text-lg md:text-xl max-w-[1040px] mx-auto">
            L'accessibilité est un facteur clé dans l’adoption de Mon Toubib. C’est pourquoi la plateforme est conçue pour être disponible sur différents supports, assurant une expérience fluide et intuitive pour tous les utilisateurs.
          </p>
        </div>

        {/* Use flex-col for small screens and flex-row for large screens */}
        <div className='flex flex-col lg:flex-row justify-center gap-[50px]'>
          <div className='flex-1'>
            <div className='p-3'>
              <div className='flex gap-4 pb-3'>
                <Image
                  src="/assets/items/check.svg"
                  alt="lightening man"
                  width={20}
                  height={20}
                  className="object-contain"
                  priority
                />
                <p><strong>Web: </strong> Utilisez Mon Toubib directement depuis votre navigateur sur ordinateur.</p>
              </div>
              <a href="">
                <Image
                  src="/assets/items/accessweb.svg"
                  alt="access-web"
                  width={135}
                  height={40}
                  className="object-contain"
                  priority
                />
              </a>
            </div>

            <div className='p-3'>
              <div className='flex gap-4 pb-3'>
                <Image
                  src="/assets/items/check.svg"
                  alt="lightening man"
                  width={20}
                  height={20}
                  className="object-contain"
                  priority
                />
                <p><strong>Android: </strong> Téléchargez l'application depuis le Google Play Store pour une utilisation sur vos appareils Android.</p>
              </div>
              <a href="">
                <Image
                  src="/assets/items/playstore.cc7a22f2.svg"
                  alt="googleplay"
                  width={135}
                  height={40}
                  className="object-contain"
                  priority
                />
              </a>
            </div>

            <div className='p-3'>
              <div className='flex gap-4 pb-3'>
                <Image
                  src="/assets/items/check.svg"
                  alt="lightening man"
                  width={20}
                  height={20}
                  className="object-contain"
                  priority
                />
                <p><strong>iOS: </strong> Disponible sur l'App Store pour les utilisateurs d'iPhone et d'iPad.</p>
              </div>
              <a href="">
                <Image
                  src="/assets/items/appstore.svg"
                  alt="store"
                  width={135}
                  height={40}
                  className="object-contain"
                  priority
                />
              </a>
            </div>
          </div>

          {/* Image moves under text on small screens */}
          <div className='p-8 flex-shrink-0'>
            <Image
              src="/assets/items/screen2.svg"
              alt="lightening man"
              width={280}
              height={264}
              className="object-contain mx-auto" // center on small screens
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Platforme;
