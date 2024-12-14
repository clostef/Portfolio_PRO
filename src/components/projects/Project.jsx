import { FolderOpenDot } from "lucide-react";
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
    bgImg: "https://images5.alphacoders.com/380/thumb-1920-380966.jpg",
    description: "Création d'une interface pour un restaurant.",
  },
  {
    name: "Portfolio-archi-sophie-bruel",
    techno: "JAVASCRIPT",
    link: "https://github.com/clostef/portfolio-archi-sophie-bruel.git",
    bgImg:
      "https://hospitality-on.com/sites/default/files/import/contenu/velizy2_opt.jpg",
    description: "Création d'un portfolio pour photographe professionnel.",
  },
  {
    name: "Bank-user",
    techno: "REACT",
    link: "https://github.com/clostef/bank_user",
    bgImg:
      "https://th.bing.com/th/id/OIP.7HjHMev7e3NTJNWbMdyP4wHaE8?w=600&h=400&rs=1&pid=ImgDetMain",
    description: "Implémentation d'une interface bancaire.",
  },
];

export const Project = () => {
  return (
    <>
      <div id="projets" className="flex gap-3 items-center">
        <FolderOpenDot className="size-8" />
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Projets
        </h2>
      </div>

      <Carousel className="w-full m-auto max-w-xs">
        <CarouselContent>
          {projects.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1 relative group">
                <Card className="relative">
                  <img
                    src={item.bgImg}
                    alt={item.name}
                    className="w-full rounded-lg"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <h1 className="text-white text-4xl font-bold pb-2">
                      {item.techno}
                    </h1>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-500 transition-colors duration-300 text-sm text-black bg-white mt-2 p-1 rounded-md underline-offset-1"
                    >
                      {item.name}
                    </a>
                  </div>
                </Card>
                {/* Tooltip */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-sm p-2 rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300">
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
    </>
  );
};
