import { FolderOpenDot, Github } from "lucide-react";
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
    name: "Ohmyfood",
    techno: "HTML/CSS",
    link: "https://github.com/clostef/clostef.github.io",
    bgImg: "/Portfolio_PRO/images/ohmyfood.webp",
    description: "Création d'une interface pour un restaurant.",
  },
  {
    name: "Portfolio-archi-sophie-bruel",
    techno: "JAVASCRIPT",
    link: "https://github.com/clostef/portfolio-archi-sophie-bruel.git",
    bgImg: "/Portfolio_PRO/images/portfolio-archi.webp",
    description: "Création d'un portfolio pour une architecte.",
  },
  {
    name: "debug-project",
    techno: "JAVASCRIPT",
    link: "https://github.com/clostef/debug-project.git",
    bgImg: "/Portfolio_PRO/images/debug-project.webp",
    description: "Déboguer et test unitaire.",
  },
  {
    name: "Bank-user",
    techno: "REACT",
    link: "https://github.com/clostef/bank_user",
    bgImg: "/Portfolio_PRO/images/bank-user.webp",
    description: "Implémentation d'une interface bancaire.",
  },
];

export const Project = () => {
  return (
    <section id="projets" aria-label="Section projets" className="mt-16">
      <div className="flex gap-3 items-center mb-4">
        <FolderOpenDot className="size-8" aria-hidden="true" />
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Projets
        </h2>
      </div>

      <Carousel className="w-full m-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
        <CarouselContent>
          {projects.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1 relative group">
                <Card className="relative overflow-hidden rounded-lg">
                  <img
                    src={item.bgImg}
                    alt={`Aperçu du projet ${item.name}`}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="w-full object-cover rounded-lg
                               h-36 sm:h-48 md:h-56 lg:h-64
                               transition duration-300 group-hover:blur-sm group-hover:brightness-75"
                  />

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-2">
                    <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 drop-shadow">
                      {item.techno}
                    </h3>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-black font-medium px-3 sm:px-4 py-2 rounded-md hover:bg-gray-100 hover:scale-105 active:scale-95 transition-transform duration-200"
                    >
                      <Github
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        aria-hidden="true"
                      />
                      Voir code
                    </a>
                  </div>
                </Card>

                <div
                  className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full
                                bg-gradient-to-t from-blue-300 to-blue-700 text-white text-xs sm:text-sm
                                p-3 rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-2
                                transition-all duration-300 w-56 sm:w-60 h-12 flex items-center justify-center text-center z-20"
                >
                  {item.description}
                </div>
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
