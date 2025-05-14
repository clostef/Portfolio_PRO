import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Description = () => {
  return (
    <>
      <div id="description" className="flex items-center gap-3 mt-20">
        <Avatar className="size-16 md:size-24">
          <AvatarImage src="" alt="clovis stefanutti" />
          <AvatarFallback className="bg-black text-white">CS</AvatarFallback>
        </Avatar>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Clovis Stefanutti
        </h2>
      </div>
      <h4 className="mt-4 scroll-m-20 text-4xl font-semibold tracking-tight italic">
        Développeur Front-End React
      </h4>
      <p>
        <span className="font-bold bg-gradient-to-r from-blue-400 to-blue-700 text-white px-1 py-0 rounded">
          Développeur Web passionné
        </span>
        , j&apos;ai suivi une formation avec OpenClassrooms, au cours de
        laquelle j&apos;ai réalisé
        <span className="font-bold bg-gradient-to-r from-blue-400 to-blue-700 text-white px-1 py-0 rounded">
          12 projets concrets
        </span>
        . Cette expérience m&apos;a permis de maîtriser les technologies
        <span className="font-bold bg-gradient-to-r from-blue-400 to-blue-700 text-white px-1 py-0 rounded">
          HTML, CSS, JavaScript et React
        </span>
        , tout en développant une approche pragmatique et orientée solution.
      </p>
      <p>
        <span className="text-decoration-underline">Mon objectif</span> :{" "}
        <span className="font-bold bg-gradient-to-r from-blue-400 to-blue-700 text-white px-1 py-0 rounded">
          concevoir des sites web performants, esthétiques et intuitifs
        </span>
        , en mettant l&apos;expérience utilisateur au cœur de chaque projet.{" "}
        <span className="font-bold bg-gradient-to-r from-blue-400 to-blue-700 text-white px-1 py-0 rounded">
          Curieux
        </span>{" "}
        et{" "}
        <span className="font-bold bg-gradient-to-r from-blue-400 to-blue-700 text-white px-1 py-0 rounded">
          rigoureux
        </span>
        , je suis prêt à relever de
        <span className="font-bold bg-gradient-to-r from-blue-400 to-blue-700 text-white px-1 py-0 rounded">
          nouveaux défis
        </span>{" "}
        au sein d&apos;une équipe dynamique et innovante.
      </p>
    </>
  );
};
