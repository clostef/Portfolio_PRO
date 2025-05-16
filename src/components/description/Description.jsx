import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Description = () => {
  const placeholder =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNjQiIGN5PSI0MCIgcj0iMjAiIGZpbGw9IiNlMmU0ZTgiLz48cGF0aCBkPSJNMTAgMTE0YzAtMjAuNjMgNDEuMzMtMzMgNTQtMzNzNTQgMTIuMzcgNTQgMzMtMTA4IDAtMTA4IDBaIiBmaWxsPSIjZTVlNWU1Ii8+PC9zdmc+";

  return (
    <section id="description" className="mt-20">
      <header className="flex items-center gap-3">
        <Avatar className="size-16 md:size-24">
          <AvatarImage
            src={placeholder}
            alt="Photo de Clovis Stefanutti"
            loading="lazy"
            width={96}
            height={96}
          />
          <AvatarFallback className="bg-black text-white">CS</AvatarFallback>
        </Avatar>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Clovis Stefanutti
        </h2>
      </header>

      <h3 className="mt-4 scroll-m-20 text-2xl font-semibold italic">
        Développeur Front-End React
      </h3>

      <article className="mt-4 space-y-4 text-base leading-relaxed">
        <p>
          <span className="highlight">Développeur Web passionné</span>,
          j&apos;ai suivi une formation avec OpenClassrooms, au cours de
          laquelle j&apos;ai réalisé{" "}
          <span className="highlight">12 projets concrets</span>. Cette
          expérience m&apos;a permis de maîtriser les technologies{" "}
          <span className="highlight">HTML, CSS, JavaScript et React</span>,
          tout en développant une approche pragmatique et orientée solution.
        </p>
        <p>
          <span>Mon objectif</span> :{" "}
          <span className="highlight">
            concevoir des sites web performants, esthétiques et intuitifs
          </span>
          , en mettant l&apos;expérience utilisateur au cœur de chaque projet.{" "}
          <span className="highlight">Curieux</span> et{" "}
          <span className="highlight">rigoureux</span>, je suis prêt à relever
          de <span className="highlight">nouveaux défis</span> au sein
          d&apos;une équipe dynamique et innovante.
        </p>
      </article>
    </section>
  );
};
