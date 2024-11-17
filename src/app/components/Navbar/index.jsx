import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  const links = [
    { name: "Sobre", url: "/Sobre" },
    { name: "Acervo", url: "/Acervo" },
    { name: "Perguntas Frequentes", url: "/Ajuda" },
    { name: "Informativos", url: "Informativos" },
  ];

  return (
    <div className="bg-white flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-4 shadow-md">
      {/* Logo */}
      <div className="mb-4 sm:mb-0">
        <Link href={"/"}>
          <Image
            src={"/Logo_capes.png"}
            width={120} // Ajusta o tamanho do logo para dispositivos menores
            height={120}
            alt="Logo CAPES"
            className="hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>

      {/* Links */}
      <ol className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-start">
        {links.map((link) => (
          <li
            key={link.name}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            <Link href={link.url}>{link.name}</Link>
          </li>
        ))}
      </ol>

      {/* Botão */}
      <div className="mt-4 sm:mt-0">
        <Link href={"/Usuario"}>
          {/* <button className="text-white bg-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"> */}
          {/*   Acessar meu CAPES */}
          {/* </button> */}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
