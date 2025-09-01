import React from "react";
import Image from "next/image";

export default function About() {
  const steps = [
    {
      title: "Optimisation des services médicaux",
      checks: [
        "Prise de rendez-vous simplifiée (présentiel ou téléconsultation)",
        "Centralisation des dossiers patients avec contrôle des permissions",
        "Gestion optimisée des ordonnances numériques",
        "Alertes et rappels automatisés",
      ],
    },
    {
      title: "Interconnexion entre les acteurs de la santé",
      checks: [
        "Connexion fluide entre patients, médecins, pharmacies, laboratoires et centres de radiologie",
        "Intégration future des cliniques et assurances",
      ],
    },
    {
      title: "Accessibilité et sécurité des données",
      checks: ["Protection conforme aux normes de confidentialité"],
    },
  ];

  return (
    <article className="w-full flex justify-center bg-light-background pt-28 px-4 lg:px-[200px]">
      <main className="flex flex-col w-full max-w-[1040px] pb-28 gap-16">
        {/* Title & Intro */}
        <div>
          <h1 className="text-headline-medium font-normal text-light-primary">
            À propos
          </h1>
          <p className="mt-2">
            {`Découvrez la plateforme Mon Toubib, la solution innovante pour
            faciliter l'accès aux soins !`}
          </p>
        </div>

        {/* Box Section */}
        <div className="flex flex-col items-center justify-center text-center rounded-2xl bg-light-secondary-container gap-6 p-6 w-full lg:w-[1040px] lg:h-[288px]">
          <Image
            src="/assets/items/montoubib.svg"
            alt="mon toubib"
            width={264}
            height={79}
          />
          <p>
            {`Mon Toubib est une solution innovante et conviviale conçue pour
            simplifier l'accès aux soins médicaux et améliorer la gestion des
            professionnels de santé. Grâce à une plateforme numérique complète
            et sécurisée, Mon Toubib répond aux besoins des patients et des
            professionnels en facilitant la prise de rendez-vous, la gestion des
            dossiers médicaux et en assurant un suivi médical optimisé. Son
            objectif est d'améliorer l'efficacité des soins et de garantir une
            expérience fluide pour tous.`}
          </p>
        </div>

        <div>
          <span className="text-headline-medium font-normal text-light-primary flex justify-center items-center">
            Notre mission
          </span>
        </div>

        {/* Steps + Image */}
        {/* Steps + Image responsive */}
        <div className="flex flex-col lg:flex-row gap-8 w-full items-start justify-center px-4 sm:px-6 lg:px-0">
          {/* Steps */}
          <div className="flex-1 w-full lg:max-w-[600px]">
            <ol className="list-decimal list-inside space-y-6">
              {steps.map((step, index) => (
                <li key={index}>
                  <span className="text-lg sm:text-xl  text-light-secondary">
                    {step.title}
                  </span>

                  <div className="flex flex-col gap-3 mt-2 pl-6">
                    {step.checks.map((check, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Image
                          src="/assets/items/check.svg"
                          alt="check"
                          width={20}
                          height={20}
                        />
                        <span className="text-gray-700 text-sm sm:text-base">
                          {check}
                        </span>
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Image */}
          <div className="flex-1 w-full flex justify-center mt-8 lg:mt-0 ">
            <Image
              src="/assets/items/partenaire.svg"
              width={388}
              height={388}
              alt="partenaire"
              className="w-full max-w-[388px] h-auto  shadow-2xl rounded-3xl"
            />
          </div>
        </div>
        <div>
          <span className="text-headline-medium font-normal text-light-primary flex justify-center items-center">
            Partenaires
          </span>
        </div>

      <div className="flex flex-wrap gap-8 justify-center w-full px-4 sm:px-6 lg:px-0">
  {/* Image 1 */}
  <div className="flex-1 min-w-[250px] max-w-[300px] flex flex-col items-center shadow-2xl rounded-3xl transform transition-transform duration-300 hover:scale-105">
    <Image
      src="/assets/items/partenaire.svg"
      width={300}
      height={300}
      alt="partenaire"
      className="w-full h-auto"
    />
    <span className="mt-2 text-light-primary font-bold text-center">
      Title 1
    </span>
  </div>

  {/* Image 2 */}
  <div className="flex-1 min-w-[250px] max-w-[300px] flex flex-col items-center shadow-2xl rounded-3xl transform transition-transform duration-300 hover:scale-105">
    <Image
      src="/assets/items/partenaire.svg"
      width={300}
      height={300}
      alt="partenaire"
      className="w-full h-auto"
    />
    <span className="mt-2 text-light-primary font-bold text-center">
      Title 2
    </span>
  </div>

  {/* Image 3 */}
  <div className="flex-1 min-w-[250px] max-w-[300px] flex flex-col items-center shadow-2xl rounded-3xl transform transition-transform duration-300 hover:scale-105">
    <Image
      src="/assets/items/partenaire.svg"
      width={300}
      height={300}
      alt="partenaire"
      className="w-full h-auto"
    />
    <span className="mt-2 text-light-primary font-bold text-center">
      Title 3
    </span>
  </div>
</div>



      </main>
    </article>
  );
}
