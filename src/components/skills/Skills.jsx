import PropTypes from "prop-types";
import { ClipboardCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import IconHtml5 from "../ui/iconhtml";
import IconCss3 from "../ui/iconcss";
import IconBxlJavascript from "../ui/iconjavacript";
import IconReact from "../ui/iconreact";
import IconTailwind from "../ui/icontailwind";
import IconBootstrap from "../ui/iconbootstrap";
import IconRedux from "../ui/iconredux";
import IconNode from "../ui/iconnode";
import IconRender from "../ui/iconrender";

const frontendSkills = [
  {
    name: "HTML / CSS",
    description:
      "Création de structures HTML sémantiques et d’interfaces CSS modernes, responsives et accessibles, en respectant les bonnes pratiques du web.",
    icons: (
      <>
        <IconHtml5 className="mx-2 size-10 transition-transform group-hover:scale-110 group-hover:rotate-3" />
        <IconCss3 className="mx-2 size-10 transition-transform group-hover:scale-110 group-hover:rotate-3" />
      </>
    ),
  },
  {
    name: "JavaScript",
    description:
      "Développement de fonctionnalités dynamiques en JavaScript moderne (ES6+), gestion de la logique métier et des interactions utilisateur.",
    icons: (
      <IconBxlJavascript className="size-12 transition-transform group-hover:scale-110 group-hover:rotate-3" />
    ),
  },
  {
    name: "React",
    description:
      "Développement d’applications React basées sur des composants réutilisables, hooks, state management et optimisation des performances.",
    icons: (
      <IconReact className="size-12 transition-transform group-hover:scale-110 group-hover:rotate-3" />
    ),
  },
  {
    name: "Tailwind CSS",
    description:
      "Conception d’interfaces modernes et maintenables avec Tailwind CSS, en appliquant une approche utility-first et responsive.",
    icons: (
      <IconTailwind className="size-12 transition-transform group-hover:scale-110 group-hover:rotate-3" />
    ),
  },
  {
    name: "Bootstrap",
    description:
      "Utilisation de Bootstrap pour accélérer le développement d’interfaces responsives grâce à son système de grille et ses composants.",
    icons: (
      <IconBootstrap className="size-12 transition-transform group-hover:scale-110 group-hover:rotate-3" />
    ),
  },
  {
    name: "Redux",
    description:
      "Gestion d’état global avec Redux et Redux Toolkit afin de centraliser et fiabiliser les données dans des applications React.",
    icons: (
      <IconRedux className="size-12 transition-transform group-hover:scale-110 group-hover:rotate-3" />
    ),
  },
];

const backendAndTools = [
  {
    name: "Node.js",
    description:
      "Création d’API REST avec Node.js, gestion des routes, middlewares et communication entre le back-end et le front-end.",
    icons: (
      <IconNode className="size-12 transition-transform group-hover:scale-110 group-hover:rotate-3" />
    ),
  },
  {
    name: "Déploiement",
    description:
      "Déploiement d’applications front-end et back-end sur Render, configuration des variables d’environnement et gestion des builds.",
    icons: (
      <IconRender className="size-12 transition-transform group-hover:scale-110 group-hover:rotate-3" />
    ),
  },
];

const SkillCard = ({ skill, index }) => (
  <Card
    className={`
      w-80
      bg-white dark:bg-zinc-900
      border border-gray-200 dark:border-zinc-700
      rounded-xl
      transition-all duration-300
      hover:-translate-y-1
      hover:shadow-2xl
      group
      animate-fadeSlide
      [animation-delay:${index * 150}ms]
    `}
  >
    <CardHeader className="flex items-center gap-4">
      <div className="flex justify-center opacity-80 group-hover:opacity-100 transition-opacity">
        {skill.icons}
      </div>
      <CardTitle className="text-center text-lg font-semibold">
        {skill.name}
      </CardTitle>
    </CardHeader>

    <CardContent className="text-sm text-gray-600 dark:text-gray-300 text-center font-medium">
      {skill.description}
    </CardContent>
  </Card>
);

SkillCard.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icons: PropTypes.node.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export const Skills = () => {
  return (
    <>
      <div className="flex items-center gap-2 mt-10 mb-6 justify-center sm:justify-start">
        <ClipboardCheck className="size-8 text-yellow-500" />
        <h2
          id="compétences"
          className="
            text-3xl font-extrabold tracking-wide
            text-gray-900 dark:text-white
            border-b-2 border-gray-300 pb-2
            text-center sm:text-left
          "
        >
          Compétences
        </h2>
      </div>

      <h3 className="flex flex-col items-center text-2xl font-semibold mb-6">
        Front-end
        <span className="mt-2 w-1 h-6 bg-yellow-500 rounded-full"></span>
      </h3>

      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {frontendSkills.map((skill, idx) => (
          <SkillCard key={skill.name} skill={skill} index={idx} />
        ))}
      </div>

      <h3 className="flex flex-col items-center text-2xl font-semibold mb-6">
        Back-end & Outils
        <span className="mt-2 w-1 h-6 bg-yellow-500 rounded-full"></span>
      </h3>

      <div className="flex flex-wrap gap-4 justify-center">
        {backendAndTools.map((skill, idx) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={frontendSkills.length + idx}
          />
        ))}
      </div>
    </>
  );
};
