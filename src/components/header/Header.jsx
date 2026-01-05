import PropTypes from "prop-types";
import { Menu, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Suspense, lazy } from "react";

const DarkModeToggle = lazy(() =>
  import("@/components/darkmode/DarkModeToggle")
);

const menuItems = [
  { name: "Description", link: "description" },
  { name: "Projets", link: "projets" },
  { name: "Compétences", link: "compétences" },
  { name: "Contact", link: "contact" },
];

export const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6 shadow-sm rounded-l-lg rounded-r-lg">
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        <a
          href="/"
          className="flex items-center gap-2 text-lg font-semibold hover:text-blue-500 transition-colors duration-300"
        >
          <Briefcase className="w-8 h-8" />
          <span className="sr-only">Mon Portfolio</span>
        </a>

        {menuItems.map((item) => (
          <a
            key={item.link}
            href={`#${item.link}`}
            className="text-muted-foreground hover:text-white hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-700 transition-all duration-300 rounded-md px-2 py-1"
          >
            {item.name}
          </a>
        ))}
      </nav>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Ouvrir le menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <SheetClose asChild>
              <a
                href="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Briefcase className="w-6 h-6" />
                <span className="sr-only">Mon Portfolio</span>
              </a>
            </SheetClose>

            {menuItems.map((item) => (
              <SheetClose asChild key={item.link}>
                <a
                  href={`#${item.link}`}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {item.name}
                </a>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      <Suspense fallback={<div style={{ width: 40, height: 40 }} />}>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </Suspense>
    </header>
  );
};

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};
