import { SquareUser } from "lucide-react";

export const Contact = () => {
  return (
    <>
      <div id="contact" className="flex gap-3 items-center">
        <SquareUser className="size-8" />
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Contact
        </h2>
      </div>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Contatez moi par mail :{" "}
        <a
          className="underline hover:text-blue-500 transition-colors duration-300"
          href="mailto:name@email.com"
        >
          c.stefanutti@outlook.fr
        </a>
      </h4>
    </>
  );
};
