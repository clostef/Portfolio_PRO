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
      "Je suis capable de créer des éléments visuels et concevoir des mises en page simples et responsives en utilisant les principes de base du HTML et du CSS.",
  },
  {
    name: "JAVASCRIPT",
    description:
      "Je suis capable de créer des fonctionnalités interactives et des applications web simples.",
  },
  {
    name: "REACT",
    description:
      "Junior avec React, je suis capable de créer différents types d'applications en utilisant cette bibliothèque.",
  },
  {
    name: "TAILWIND CSS",
    description:
      "Je maîtrise le framework Tailwind CSS pour la création d'interfaces utilisateur modernes et responsives.",
  },
  {
    name: "BOOTSTRAP",
    description:
      "J'utilise Bootstrap pour structurer rapidement des interfaces responsives avec un système de grille et des composants prédéfinis.",
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
              className="w-80 pt-4 transition-all duration-300 bg-white hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-900 hover:text-white"
            >
              <div className="flex justify-center items-center">
                {item.name === "HTML/CSS" ? (
                  <>
                    <IconHtml5 className="size-10 mx-2" />
                    <IconCss3 className="size-10 mx-2" />
                  </>
                ) : item.name === "JAVASCRIPT" ? (
                  <IconBxlJavascript className="mx-auto h-12 w-12" />
                ) : item.name === "TAILWIND CSS" ? (
                  <IconTailwind className="mx-auto h-12 w-12" />
                ) : item.name === "BOOTSTRAP" ? (
                  <IconBootstrap className="mx-auto h-12 w-12" />
                ) : item.name === "REDUX" ? (
                  <IconRedux className="mx-auto h-12 w-12" />
                ) : (
                  <IconReact className="mx-auto h-12 w-12" />
                )}
              </div>
              <CardHeader>
                <CardDescription>{item.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
};
