import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Retour en haut de la page"
      className={`
    fixed z-50
    bottom-20 right-4        /* mobile: au-dessus du footer */
    sm:bottom-5 sm:right-5   /* tablette: coin bas */
    md:bottom-6 md:right-6   /* desktop: coin bas */

    flex items-center justify-center
    w-10 h-14
    sm:w-11 sm:h-16
    md:w-12 md:h-[72px]

    rounded-2xl
    bg-gradient-to-tr from-blue-500 to-blue-700
    dark:from-blue-600 dark:to-blue-800
    text-white
    shadow-xl

    transition-all duration-300 ease-out
    hover:scale-110 hover:shadow-2xl
    active:scale-95

    ${
      isVisible
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 translate-y-6 pointer-events-none"
    }
  `}
    >
      <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6" />
    </button>
  );
}
