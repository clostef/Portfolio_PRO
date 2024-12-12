import { FileBadge2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import IconHtml5 from "../ui/iconhtml";
import IconCss3 from "../ui/iconcss";
import IconBxlJavascript from "../ui/iconjavacript";
import IconReact from "../ui/iconreact";

const skills = [
  {
    name: "HTML/CSS",
    description:
      " Je suis capable de créer des éléments visuels et concevoir des mises en page simples et responsives en utilisant les principes de base du HTML et du CSS. ",
  },
  {
    name: "JAVASCRIPT",
    description:
      " Je suis capable de créer des fonctionnalités interactives et des applications web simples",
  },
  {
    name: "REACT",
    description:
      "Junior avec React, je suis capable de créer différents types d'applications en utilisant cette bibliothèque.",
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
              {item.name === "HTML/CSS" ? (
                <div className="flex justify-center">
                  <IconHtml5 className="size-10" />
                  <IconCss3 className="size-10" />
                </div>
              ) : item.name === "JAVASCRIPT" ? (
                <IconBxlJavascript className="size-10 mx-auto" />
              ) : (
                <IconReact className="size-10 mx-auto" />
              )}
              <CardHeader>
                <CardTitle>{item.icon}</CardTitle>
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
