export const Description = () => {
  return (
    <section id="description" className="mt-20 max-w-4xl mx-auto px-4 sm:px-6">
      <header className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 mb-8">
        <h2
          className="
            scroll-m-20
            text-3xl sm:text-4xl
            font-extrabold tracking-wide
            text-gray-900 dark:text-white
            border-b-2 border-gray-300 dark:border-gray-600
            pb-2
            drop-shadow-md
            transition-all duration-500 ease-out
            hover:border-blue-500 hover:scale-105
            transform opacity-0 translate-y-4 animate-fade-in
            text-center sm:text-left
          "
        >
          Clovis Stefanutti
        </h2>
      </header>

      <h3 className="mt-4 text-2xl sm:text-3xl font-semibold italic text-gray-800 dark:text-gray-200 text-center sm:text-left opacity-0 translate-y-2 animate-fade-in delay-200">
        Développeur Front-End React
      </h3>

      <article className="mt-6 space-y-4 sm:space-y-5 text-base sm:text-lg leading-relaxed font-medium text-gray-700 dark:text-gray-300 opacity-0 animate-fade-in delay-400">
        <p>
          <span className="highlight">Développeur Front-End React</span> formé
          chez OpenClassrooms, avec une approche orientée{" "}
          <span className="highlight">composants</span>,{" "}
          <span className="highlight">performance</span> et{" "}
          <span className="highlight">maintenabilité</span>. J’ai réalisé{" "}
          <span className="highlight">12 projets concrets</span>, allant de
          sites vitrines à des applications web dynamiques intégrant{" "}
          <span className="highlight">authentification</span>,{" "}
          <span className="highlight">consommation d’API</span> et{" "}
          <span className="highlight">gestion d’état</span>.
        </p>

        <p>
          Ces projets m’ont permis de maîtriser{" "}
          <span className="highlight">HTML</span>,{" "}
          <span className="highlight">CSS</span>,{" "}
          <span className="highlight">JavaScript</span> et{" "}
          <span className="highlight">React</span>, ainsi que des pratiques
          professionnelles comme le{" "}
          <span className="highlight">versioning avec Git</span>, la{" "}
          <span className="highlight">gestion d’état avec Redux</span> et le
          développement de{" "}
          <span className="highlight">composants réutilisables</span>.
        </p>

        <p>
          Je travaille régulièrement avec des{" "}
          <span className="highlight">APIs</span> et j’accorde une attention
          particulière au <span className="highlight">responsive design</span>,
          à la cohérence visuelle et à la mise en place d’un{" "}
          <span className="highlight">design system</span>. J’ai l’habitude de{" "}
          <span className="highlight">respecter un design existant</span> et de
          structurer mon code dans une logique proche d’un environnement
          professionnel.
        </p>

        <p>
          Curieux et persévérant, je cherche constamment à{" "}
          <span className="highlight">améliorer mes compétences</span> et à
          proposer des solutions concrètes et efficaces. Je souhaite rejoindre
          une équipe pour <span className="highlight">collaborer</span>,
          apprendre et <span className="highlight">contribuer activement</span>{" "}
          à des projets ambitieux.
        </p>
      </article>

      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(1rem); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-400 { animation-delay: 0.4s; }
        `}
      </style>
    </section>
  );
};
