import "./App.css";
import { useState, useEffect } from "react";
import { Header } from "@/components/header/Header";
import { Description } from "./components/description/Description";
import { Project } from "./components/projects/Project";
import { Skills } from "@/components/skills/Skills";
import { Contact } from "@/components/contact/Contact";
import { ScrollToTopButton } from "@/components/scroll button/ScrollToTopButton";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <main className="main-container bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="content-container">
        <Description />
        <Project />
        <Skills />
        <Contact />
      </div>

      <ScrollToTopButton />

      <footer className="py-4 text-center text-sm text-muted-foreground border-t border-gray-200 dark:border-gray-700 dark:text-gray-400">
        © 2025 Clovis Stefanutti. Tous droits réservés.
      </footer>
    </main>
  );
}

export default App;
