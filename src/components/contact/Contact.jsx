import { SquareUser, PhoneForwarded, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <>
      <style>
        {`
          @keyframes rotateOscillate {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(90deg); }
            50% { transform: rotate(0deg); }
            75% { transform: rotate(-90deg); }
            100% { transform: rotate(0deg); }
          }

          .hover-oscillate:hover {
            animation: rotateOscillate 0.5s ease-in-out;
          }
        `}
      </style>

      <div id="contact" className="flex gap-3 items-center">
        <SquareUser className="size-8" />
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Contact
        </h2>
      </div>
      <div className="flex items-center gap-2">
        <Mail className="size-6 hover-oscillate" />
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Contactez-moi par mail :{" "}
          <a
            className="underline hover:text-blue-500 transition-colors duration-300"
            href="mailto:c.stefanutti@outlook.fr"
          >
            c.stefanutti@outlook.fr
          </a>
        </h4>
      </div>
      <div className="flex items-center gap-2">
        <PhoneForwarded className="size-6 hover-oscillate" />
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Par téléphone :{" "}
          <a
            className="underline hover:text-blue-500 transition-colors duration-300"
            href="tel:+3349189819"
          >
            +33 4 91 89 81 9
          </a>
        </h4>
      </div>
    </>
  );
};
