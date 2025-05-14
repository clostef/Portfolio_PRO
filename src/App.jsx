import "./App.css";
import { useState, useEffect } from "react";
import { Header } from "@/components/header/Header";
import { Description } from "./components/description/Description";
import { Project } from "./components/projects/Project";
import { Skills } from "@/components/skills/Skills";
import { Contact } from "@/components/contact/Contact";

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
    </main>
  );
}

export default App;
