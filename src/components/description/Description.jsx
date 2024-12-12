import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Description = () => {
  return (
    <>
      <div id="description" className="flex items-center gap-3 mt-20">
        <Avatar className="size-16">
          <AvatarImage src="" alt="clovis stefanutti" />
          <AvatarFallback className="bg-black text-white">CS</AvatarFallback>
        </Avatar>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Clovis Stefanutti
        </h2>
      </div>
      <h4 className="mt-4 scroll-m-20 text-4xl font-semibold tracking-tight italic">
        Intégrateur Web
      </h4>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        J&apos;ai suivi une formation d&apos;intégrateur web avec Openclassroom
        qui m&apos;a permis d&apos;acquérir une expérience à travers différents
        projets (12 projets), me permettant de travailler avec du HTML/CSS,
        Javascript et React.
        <br />
        <br />
        Passionné par le développement web, je souhaite mettre mes compétences
        en intégration au service de projets innovants. Mon objectif est de
        créer des sites internet alliant esthétique et fonctionnalité pour
        offrir une expérience utilisateur optimale.
      </p>
    </>
  );
};
