// src/data/blogs.js
const blogs = [
  {
    id: 1,
    category: "Santé générale",
    date: "17 février 2025",
    title: "Bien-être au quotidien",
    excerpt:
      "Découvrez comment de petites habitudes peuvent transformer votre santé...",
    image: "/assets/items/image1.svg",
    content: (
      <>
        <h4>Introduction</h4>
        <p>
          La santé générale repose sur des choix simples mais réguliers. 
          Prendre soin de soi au quotidien est essentiel pour prévenir les maladies 
          et améliorer la qualité de vie.
        </p>

        <h4>Quelques habitudes à adopter</h4>
        <ul>
          <li>Manger équilibré, riche en fruits et légumes.</li>
          <li>Faire au moins 30 minutes d’exercice par jour.</li>
          <li>Bien s’hydrater tout au long de la journée.</li>
          <li>Privilégier un sommeil réparateur.</li>
        </ul>

        <h4>Conclusion</h4>
        <p>
          Ce sont de petits gestes simples, mais cumulés, ils créent une
          différence durable dans le bien-être global.
        </p>
      </>
    ),
  },
  {
    id: 2,
    category: "Santé mentale",
    date: "20 février 2025",
    title: "La santé mentale, un pilier oublié",
    excerpt:
      "L’importance de prendre soin de sa santé mentale dans un monde stressant...",
    image: "/assets/items/image2.svg",
    content: (
      <>
        <h4>Pourquoi la santé mentale est-elle cruciale ?</h4>
        <p>
          Dans un monde où le stress et l’anxiété sont de plus en plus présents,
          la santé mentale mérite autant d’attention que la santé physique.
        </p>

        <h4>Signes à ne pas ignorer</h4>
        <p>
          Il existe plusieurs signaux qui doivent alerter : 
        </p>
        <ol>
          <li>Fatigue émotionnelle persistante.</li>
          <li>Perte d’intérêt pour les activités quotidiennes.</li>
          <li>Difficultés de concentration.</li>
        </ol>

        <h4>Conseils pour préserver son équilibre</h4>
        <p>
          - Pratiquer la méditation ou la respiration consciente. <br />
          - Maintenir un réseau social solide. <br />
          - Consulter un professionnel en cas de besoin.
        </p>

        <h4>Conclusion</h4>
        <p>
          Prendre soin de sa santé mentale, c’est investir dans son avenir et 
          renforcer sa résilience face aux épreuves.
        </p>
      </>
    ),
  },
  {
    id: 3,
    category: "Télémédecine",
    date: "25 février 2025",
    title: "La Télémédecine au Maroc : Une Révolution Accessible",
    excerpt:
      "La télémédecine est en plein essor au Maroc, offrant une solution moderne...",
    image: "/assets/items/image3.svg",
    content: (
      <>
        <h4>La Télémédecine au Maroc: Une Révolution Accessible</h4>
        <p>
          La télémédecine est en plein essor au Maroc, offrant une solution
          moderne et pratique pour accéder aux soins médicaux sans quitter votre
          domicile. Avec <strong>Mon Toubib</strong>, cette technologie devient 
          accessible à tous.
        </p>

        <h4>{`Qu'est-ce que la télémédecine ?`}</h4>
        <p>
          La télémédecine désigne l’ensemble des pratiques médicales réalisées à
          distance grâce aux technologies de communication. Elle inclut :
        </p>
        <ul>
          <li>Les téléconsultations.</li>
          <li>Le suivi à distance des patients.</li>
          <li>La transmission sécurisée de résultats médicaux.</li>
        </ul>

        <h4>{`Les étapes d'une téléconsultation avec Mon Toubib`}</h4>
        <ol>
          <li>Créer un compte sécurisé sur la plateforme.</li>
          <li>Choisir un médecin disponible.</li>
          <li>Participer à la consultation en vidéo ou par chat.</li>
        </ol>

        <h4>Pour qui est-ce utile ?</h4>
        <p>
          - Les patients âgés ou à mobilité réduite. <br />
          - Les habitants des zones rurales. <br />
          - Ceux qui veulent gagner du temps.
        </p>

        <h4>Conclusion</h4>
        <p>
          Avec Mon Toubib, la télémédecine n’a jamais été aussi simple. 
          C’est une avancée qui transforme l’expérience des soins au Maroc.
        </p>
      </>
    ),
  },
];

export default blogs;
