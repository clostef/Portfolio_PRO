import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BriefcaseBusiness } from "lucide-react";

const menuItems = [
  {
    name: "Description",
    link: "description",
  },
  {
    name: "Projets",
    link: "projets",
  },
  {
    name: "Compétences",
    link: "compétences",
  },
  {
    name: "Contact",
    link: "contact",
  },
];

export const Header = () => {
  return (
    <header className="sticky z-10 top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <a
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base hover:text-blue-500 transition-colors duration-300"
        >
          <BriefcaseBusiness className="size-9" />
          <span className="sr-only">Acme Inc</span>
        </a>
        {menuItems.map((item) => {
          return (
            <a
              href={`#${item.link}`}
              key={item.link}
              className="text-muted-foreground hover:text-foreground"
            >
              {item.name}
            </a>
          );
        })}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <a
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <BriefcaseBusiness className="size-6" />
              <span className="sr-only">Acme Inc</span>
            </a>

            {menuItems.map((item) => {
              return (
                <a
                  key={item.link}
                  href={`#${item.link}`}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {item.name}
                </a>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};
