import { useState, useEffect } from "react";
import {
  Github,
  Mail,
  Phone,
  Linkedin,
  MessageCircle,
  ZoomIn,
} from "lucide-react";

const MAX_CHARS = 1000;

export const Contact = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [remaining, setRemaining] = useState(MAX_CHARS);
  const [message, setMessage] = useState("");
  const [zoomOpen, setZoomOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showModal || zoomOpen ? "hidden" : "auto";
  }, [showModal, zoomOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/xqaqwvzw", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setError(false);
        form.reset();
        setMessage("");
        setRemaining(MAX_CHARS);
        setShowModal(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleBackdropClick = (setter) => {
    if (window.innerWidth >= 768) setter(false);
  };

  return (
    <section
      id="contact"
      className="relative max-w-3xl lg:max-w-5xl mx-auto py-16 px-4 sm:px-6"
    >
      <div className="mb-8 flex items-center gap-2 justify-center sm:justify-start">
        <MessageCircle className="size-8 text-blue-600" />
        <h2 className="border-b-2 border-gray-300 pb-2 text-3xl font-extrabold tracking-wide text-gray-900 dark:text-white">
          Contact
        </h2>
      </div>

      {error && (
        <div className="mb-6 bg-red-100 text-red-800 p-4 rounded-lg text-center shadow">
          Une erreur est survenue. Veuillez réessayer.
        </div>
      )}

      {!showModal && (
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto grid gap-4 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-zinc-700"
        >
          <div className="grid gap-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Nom
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Votre nom"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition
                         text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500
                         bg-white dark:bg-zinc-800"
            />
          </div>

          <div className="grid gap-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Votre email"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition
                         text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500
                         bg-white dark:bg-zinc-800"
            />
          </div>

          <div className="grid gap-1 relative">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              maxLength={MAX_CHARS}
              required
              placeholder="Votre message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setRemaining(MAX_CHARS - e.target.value.length);
              }}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none
                         md:h-40 lg:h-48
                         text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500
                         bg-white dark:bg-zinc-800"
            />

            <button
              type="button"
              onClick={() => setZoomOpen(true)}
              className="absolute top-2 right-2 p-1 bg-gray-200 dark:bg-zinc-700 rounded-full hover:bg-gray-300 dark:hover:bg-zinc-600 transition"
              title="Agrandir le message"
              aria-label="Agrandir le message"
            >
              <ZoomIn className="w-4 h-4 text-gray-600 dark:text-gray-300" />
            </button>

            <p
              className={`text-xs text-right transition-colors ${
                remaining <= 100 ? "text-red-500" : "text-gray-400"
              }`}
            >
              {remaining} caractère{remaining !== 1 ? "s" : ""} restant
            </p>
          </div>

          <input type="text" name="_gotcha" className="hidden" />

          <button
            type="submit"
            disabled={loading}
            className={`flex items-center justify-center gap-2 bg-blue-600 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 shadow-md transform ${
              loading
                ? "opacity-70 cursor-not-allowed"
                : "hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400"
            }`}
          >
            {loading ? "Envoi..." : "Envoyer"}
          </button>
        </form>
      )}

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href="mailto:clovisstefanutti@gmail.com"
          className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:shadow-lg hover:scale-105 transition transform"
          aria-label="Envoyer un email"
        >
          <Mail className="w-6 h-6 text-blue-600" />
        </a>

        <a
          href="tel:+33649189819"
          className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:shadow-lg hover:scale-105 transition transform"
          aria-label="Appeler"
        >
          <Phone className="w-6 h-6 text-green-600" />
        </a>

        <a
          href="https://www.linkedin.com/in/clovis-stefanutti-87517a352/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-4 bg-gray-100 dark:bg-zinc-700 rounded-lg hover:shadow-lg hover:scale-105 transition transform"
          aria-label="Voir le profil LinkedIn"
        >
          <Linkedin className="w-6 h-6 text-blue-700" />
          <span className="font-medium">LinkedIn</span>
        </a>

        <a
          href="https://github.com/clostef"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-4 bg-gray-100 dark:bg-zinc-700 rounded-lg hover:shadow-lg hover:scale-105 transition transform"
          aria-label="Voir le profil GitHub"
        >
          <Github className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          <span className="font-medium">GitHub</span>
        </a>
      </div>

      {zoomOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 transition-opacity duration-300 opacity-100"
          onClick={() => handleBackdropClick(setZoomOpen)}
        >
          <div
            className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl w-full max-w-md sm:max-w-3xl max-h-[80vh] sm:h-auto overflow-y-auto overflow-x-hidden transform transition-transform duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Prévisualisation
            </h3>
            <p className="whitespace-pre-wrap break-words text-gray-800 dark:text-gray-200">
              {message}
            </p>
            <button
              onClick={() => setZoomOpen(false)}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              aria-label="Fermer la prévisualisation"
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 transition-opacity duration-300 opacity-100"
          onClick={() => handleBackdropClick(setShowModal)}
        >
          <div
            className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl max-w-sm w-full text-center transform transition-transform duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              Message envoyé
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Merci pour votre message. Je vous répondrai rapidement.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              aria-label="Fermer le message envoyé"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
