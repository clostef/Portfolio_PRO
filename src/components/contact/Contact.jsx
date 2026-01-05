import { useState } from "react";
import { Mail, Phone, Linkedin, User2 } from "lucide-react";

export const Contact = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
        setShowModal(true);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="mb-8 flex items-center gap-3">
        <User2 className="size-8" />
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight drop-shadow-md">
          Contact
        </h2>
      </div>

      {error && (
        <div className="mb-6 bg-red-100 text-red-800 p-4 rounded text-center shadow transition-all duration-500">
          ❌ Une erreur est survenue. Veuillez réessayer.
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="mt-6 max-w-xl mx-auto grid gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-lg transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-lg transition"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Votre message"
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-lg transition"
        />
        <input type="text" name="_gotcha" style={{ display: "none" }} />

        <button
          type="submit"
          disabled={loading}
          className={`flex items-center justify-center gap-2 bg-blue-600 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg ${
            loading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700"
          }`}
        >
          {loading && (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          )}
          {loading ? "Envoi..." : "Envoyer"}
        </button>
      </form>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="mailto: clovisstefanutti@gmail.com"
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-blue-100 dark:hover:bg-blue-800 hover:shadow-lg transition-shadow"
        >
          <Mail className="w-5 h-5 text-blue-600" />
        </a>

        <a
          href="tel: +33649189819"
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-blue-100 dark:hover:bg-blue-800 hover:shadow-lg transition-shadow"
        >
          <Phone className="w-5 h-5 text-green-600" />
        </a>

        <a
          href="https://www.linkedin.com/in/clovis-stefanutti-87517a352/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-blue-100 dark:hover:bg-blue-800 hover:shadow-lg transition-shadow"
        >
          <Linkedin className="w-5 h-5 text-blue-700" />
          <span className="text-blue-700 font-medium">LinkedIn</span>
        </a>

        <a
          href="https://github.com/clostef"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-blue-100 dark:hover:bg-blue-800 hover:shadow-lg transition-shadow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-800 dark:text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.256c-3.338.727-4.033-1.416-4.033-1.416-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.084-.73.084-.73 1.205.084 1.84 1.24 1.84 1.24 1.07 1.834 2.805 1.304 3.492.996.107-.775.42-1.305.763-1.604-2.665-.3-5.466-1.332-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.404 1.02.004 2.04.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.236 1.911 1.236 3.221 0 4.61-2.804 5.628-5.475 5.921.432.372.816 1.103.816 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          <span className="text-gray-800 dark:text-white font-medium">
            GitHub
          </span>
        </a>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm w-full text-center">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              Message envoyé !
            </h3>
            <p className="text-gray-700 mb-4">
              Merci pour votre message. Je vous répondrai dès que possible.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
