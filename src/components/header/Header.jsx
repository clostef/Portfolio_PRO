import PropTypes from "prop-types";
import { Menu, Laptop, Linkedin, Github } from "lucide-react";
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
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className="
        sticky top-0 z-10
        flex h-16 items-center justify-between
        border-b bg-background/80 backdrop-blur
        px-4 md:px-6
        rounded-b-lg
      "
    >
      <div className="hidden md:flex items-center w-full text-sm font-medium">
        <div className="flex items-center gap-8">
          <a
            href="#"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-lg font-semibold tracking-wide transition-colors duration-300 hover:text-blue-500"
          >
            <Laptop className="w-7 h-7 text-blue-600" />
            <span>Clovis Stefanutti</span>
          </a>

          {menuItems.map((item) => (
            <a
              key={item.link}
              href={`#${item.link}`}
              className="relative px-2 py-1 rounded-md text-muted-foreground transition-all duration-300 hover:text-blue-500
                after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-500
                after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6 ml-auto">
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/clovis-stefanutti-87517a352/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 transition-transform duration-300 hover:text-blue-500 hover:-translate-y-0.5 p-1 rounded"
              title="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/clostef"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-gray-200 transition-transform duration-300 hover:text-gray-500 hover:-translate-y-0.5 p-1 rounded"
              title="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>

          <Suspense fallback={<div style={{ width: 40, height: 40 }} />}>
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </Suspense>
        </div>
      </div>

      <div className="flex md:hidden items-center justify-between w-full">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Ouvrir le menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="flex flex-col justify-between">
            <nav className="grid gap-6 text-lg font-medium mt-6">
              <SheetClose asChild>
                <a
                  href="#description"
                  onClick={() => {
                    setTimeout(
                      () => window.scrollTo({ top: 0, behavior: "smooth" }),
                      100
                    );
                  }}
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Laptop className="w-6 h-6 text-blue-600" />
                </a>
              </SheetClose>

              {menuItems.map((item) => (
                <SheetClose asChild key={item.link}>
                  <a
                    href={`#${item.link}`}
                    className="text-muted-foreground hover:text-foreground transition"
                  >
                    {item.name}
                  </a>
                </SheetClose>
              ))}
            </nav>

            <div className="flex items-center gap-5 mt-6 mb-4 px-2">
              <a
                href="https://www.linkedin.com/in/clovis-stefanutti-87517a352/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 transition-transform duration-300 hover:text-blue-500 hover:-translate-y-0.5 p-1 rounded"
                title="LinkedIn"
              >
                <Linkedin className="w-7 h-7" />
              </a>
              <a
                href="https://github.com/clostef"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-200 transition-transform duration-300 hover:text-gray-500 hover:-translate-y-0.5 p-1 rounded"
                title="GitHub"
              >
                <Github className="w-7 h-7" />
              </a>
            </div>
          </SheetContent>
        </Sheet>

        <Suspense fallback={<div style={{ width: 40, height: 40 }} />}>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </Suspense>
      </div>
    </header>
  );
};

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};
