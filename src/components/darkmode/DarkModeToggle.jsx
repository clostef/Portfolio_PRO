import PropTypes from "prop-types";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle Dark Mode"
      className="text-yellow-400 dark:text-yellow-300 transition duration-300 hover:shadow-lg hover:scale-105"
    >
      {darkMode ? (
        <SunIcon className="h-7 w-7 text-yellow-400" />
      ) : (
        <MoonIcon className="h-7 w-7 text-blue-500" />
      )}
    </Button>
  );
};

DarkModeToggle.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default DarkModeToggle;
