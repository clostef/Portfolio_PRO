import { useState, useRef, useEffect } from "react";
import { Github, ExternalLink, Info, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from "@/components/ui/carousel";

const projects = [
  {
    name: "Crypto",
    techno: "REACT / REDUX",
    link: "https://github.com/clostef/crypto.git",
    site: "https://crypto-frontend-0dp4.onrender.com",
    bgImg: "/Portfolio_PRO/images/crypto.png",
    description:
      "Dashboard crypto avec graphiques dynamiques, consommation d’API, gestion d’état globale (Redux Toolkit) et composants réutilisables.",
  },
  {
    name: "Pizzeria-React",
    techno: "REACT",
    link: "https://github.com/clostef/Pizzeria-React.git",
    site: "https://clostef.github.io/Pizzeria-React/",
    bgImg: "/Portfolio_PRO/images/fbpizza.png",
    description:
      "Landing page React responsive, intégration UI fidèle à une maquette et structuration en composants réutilisables.",
  },
  {
    name: "Kasa-project",
    techno: "REACT",
    link: "https://github.com/clostef/Kasa_project.git",
    site: "https://clostef.github.io/Kasa_project/",
    bgImg: "/Portfolio_PRO/images/kasa.png",
    description:
      "Application de location type Airbnb avec routing dynamique, gestion des données et composants React modulaires.",
  },
  {
    name: "Bank-user",
    techno: "REACT",
    link: "https://github.com/clostef/bank_user",
    bgImg: "/Portfolio_PRO/images/bank-user.png",
    description:
      "Interface bancaire avec authentification utilisateur, récupération de données via API et gestion de l’état applicatif.",
  },
  {
    name: "debug-project",
    techno: "JAVASCRIPT",
    link: "https://github.com/clostef/debug-project.git",
    bgImg: "/Portfolio_PRO/images/debug-project.webp",
    description:
      "Débogage d’une application existante, correction d’anomalies et mise en place de tests unitaires.",
  },
  {
    name: "Portfolio-archi-sophie-bruel",
    techno: "JAVASCRIPT",
    link: "https://github.com/clostef/portfolio-archi-sophie-bruel.git",
    bgImg: "/Portfolio_PRO/images/portfolio-archi.png",
    description:
      "Portfolio professionnel avec manipulation du DOM, appels API et gestion dynamique du contenu.",
  },
  {
    name: "Ohmyfood",
    techno: "HTML / CSS",
    link: "https://github.com/clostef/clostef.github.io",
    bgImg: "/Portfolio_PRO/images/ohmyfood.png",
    description:
      "Intégration responsive à partir de maquettes, animations CSS et respect des bonnes pratiques HTML/CSS.",
  },
];

export const Project = () => {
  const [tooltipIndex, setTooltipIndex] = useState(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        tooltipIndex !== null &&
        cardRefs.current[tooltipIndex] &&
        !cardRefs.current[tooltipIndex].contains(event.target)
      ) {
        setTooltipIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [tooltipIndex]);

  return (
    <section aria-label="Section projets" className="mt-16">
      <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
        <Award className="size-8 text-green-600" aria-hidden="true" />
        <h2
          id="projets"
          className="
          scroll-m-20
          text-3xl font-extrabold tracking-wide
          text-gray-900 dark:text-white
          drop-shadow-md
          border-b-2 border-pink-300 pb-2
          transition-all duration-300
          text-center sm:text-left
         "
        >
          Projets
        </h2>
      </div>

      <Carousel className="w-full m-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
        <CarouselContent>
          {projects.map((item, index) => (
            <CarouselItem key={index}>
              <div
                className="p-1 relative group"
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <Card className="relative overflow-hidden rounded-lg">
                  <img
                    src={item.bgImg}
                    alt={`Aperçu du projet ${item.name}`}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="
                      w-full object-cover rounded-lg
                      h-44 sm:h-52 md:h-56 lg:h-64
                      transition duration-300
                      group-hover:blur-sm group-hover:brightness-75
                    "
                  />

                  <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20">
                    <span
                      className="
                      text-white text-sm sm:text-base font-semibold
                      bg-black/50 px-4 py-1 rounded-full
                      backdrop-blur-sm
                    "
                    >
                      {item.techno}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center gap-3 z-20">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2
                        bg-white/90 text-gray-900
                        px-4 py-2 rounded-md
                        shadow-sm
                        hover:bg-white hover:shadow-md hover:scale-105
                        transition-all
                      "
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>

                    {item.site && (
                      <a
                        href={item.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center gap-2
                          bg-white/90 text-gray-900
                          px-4 py-2 rounded-md
                          shadow-sm
                          hover:bg-white hover:shadow-md hover:scale-105
                          transition-all
                        "
                      >
                        <ExternalLink className="w-4 h-4" />
                        Site
                      </a>
                    )}
                  </div>

                  {item.name === "Crypto" && (
                    <div className="absolute top-2 right-2 z-40 sm:hidden">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setTooltipIndex(
                            tooltipIndex === index ? null : index
                          );
                        }}
                        className="
                          w-7 h-7
                          bg-white/90
                          rounded-full
                          flex items-center justify-center
                          shadow-md
                          hover:bg-white
                          transition
                        "
                        aria-label="Informations projet Crypto"
                      >
                        <Info className="w-4 h-4 text-gray-700" />
                      </button>
                    </div>
                  )}

                  {item.name === "Crypto" && tooltipIndex === index && (
                    <div
                      className="
                        sm:hidden
                        absolute top-12 left-1/2 -translate-x-1/2
                        z-50
                        w-56
                        rounded-lg
                        bg-white
                        text-gray-800
                        text-xs
                        p-2
                        shadow-xl
                        border
                        text-center
                      "
                      onClick={(e) => e.stopPropagation()}
                    >
                      <p className="font-medium mb-1">
                        Compte de démonstration
                      </p>
                      <p>ID : j.doe@gmail.com</p>
                      <p>MP : password1</p>
                      <p className="italic opacity-70 mt-2 text-[11px]">
                        Render free → première connexion lente
                      </p>
                    </div>
                  )}

                  <div
                    className="absolute inset-0 bg-black/60
                  text-white text-xs sm:text-sm   
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                    flex items-end justify-center
                    p-4
                    rounded-lg
                    z-10
                    "
                  >
                    <p className="text-center leading-snug sm:leading-normal">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />

        <div className="sm:hidden">
          <CarouselDots />
        </div>
      </Carousel>
    </section>
  );
};
