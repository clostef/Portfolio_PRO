import { FileBadge2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import IconHtml5 from "../ui/iconhtml";
import IconCss3 from "../ui/iconcss";
import IconBxlJavascript from "../ui/iconjavacript";
import IconReact from "../ui/iconreact";
import IconTailwind from "../ui/icontailwind";
import IconBootstrap from "../ui/iconbootstrap";
import IconRedux from "../ui/iconredux";

const skills = [
  {
    name: "HTML/CSS",
    description:
      "Avec HTML et CSS, je crée des structures solides et des interfaces esthétiques, en respectant les bonnes pratiques du responsive design.",
  },
  {
    name: "JAVASCRIPT",
    description:
      "Avec JavaScript, je développe des fonctionnalités interactives et dynamiques pour enrichir l’expérience utilisateur.",
  },
  {
    name: "REACT",
    description:
      "Junior en React, je maîtrise la création d’applications basées sur des composants réutilisables, assurant à la fois performance et évolutivité.",
  },
  {
    name: "TAILWIND CSS",
    description:
      "Avec Tailwind CSS, je développe des interfaces utilisateur modernes et adaptatives, tout en appliquant des pratiques de conception modulaires et maintenables.",
  },
  {
    name: "BOOTSTRAP",
    description:
      "Je maîtrise Bootstrap pour accélérer le développement d’interfaces responsives et homogènes grâce à son système de grille et ses composants intégrés.",
  },
  {
    name: "REDUX",
    description:
      "J'utilise Redux pour la gestion d'état dans des applications React complexes, permettant de centraliser et de rendre prévisible l'état de l'application.",
  },
];

export const Skills = () => {
  return (
    <>
      <div id="compétences" className="flex gap-3 items-center">
        <FileBadge2 className="size-8" />
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Compétences
        </h2>
      </div>
      <div className="flex flex-wrap gap-1 justify-center">
        {skills.map((item, index) => {
          return (
            <Card
              key={index}
              className="w-80 pt-4 transition-all duration-300 bg-white hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-900 hover:shadow-xl card-hover group"
            >
              <div className="flex justify-center items-center">
                {item.name === "HTML/CSS" ? (
                  <>
                    <IconHtml5 className="flip-on-hover mx-2 size-10" />
                    <IconCss3 className="flip-on-hover mx-2 size-10" />
                  </>
                ) : item.name === "JAVASCRIPT" ? (
                  <IconBxlJavascript className="flip-on-hover mx-auto h-12 w-12" />
                ) : item.name === "TAILWIND CSS" ? (
                  <IconTailwind className="flip-on-hover mx-auto h-12 w-12" />
                ) : item.name === "BOOTSTRAP" ? (
                  <IconBootstrap className="flip-on-hover mx-auto h-12 w-12" />
                ) : item.name === "REDUX" ? (
                  <IconRedux className="flip-on-hover mx-auto h-12 w-12" />
                ) : (
                  <IconReact className="flip-on-hover mx-auto h-12 w-12" />
                )}
              </div>
              <CardHeader>
                <CardDescription className="group-hover:text-white transition-colors duration-300">
                  {item.name}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-900 group-hover:text-white transition-colors duration-300">
                <p>{item.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
};
