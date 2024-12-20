import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  const links = [
    { name: "Home", url: "/" },
    { name: "Meu perfil", url: "/Usuario" },
    { name: "Sobre", url: "/Sobre" },
    { name: "Acervo", url: "/Acervo" },
    { name: "Perguntas Frequentes", url: "/Ajuda" },
    { name: "Informativos", url: "/Infos" },
    { name: "Noticias", url: "/NewsSearch" },
  ];

  return (
    <div className="bg-white flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-4 shadow-md">
      {/* Logo */}
      <div className="mb-4 sm:mb-0">
        <Link
          className="flex items-center justify-center flex-col md:flex-row"
          href={"/"}
        >
          <Image
            src={"/Logo_capes.png"}
            width={160} // Ajusta o tamanho do logo para dispositivos menores
            height={120}
            alt="Logo CAPES"
            className="hover:scale-105 transition-transform duration-300"
          />

          <Image
            src={"/periodicos.png"}
            width={200} // Ajusta o tamanho do logo para dispositivos menores
            height={50}
            alt="Logo CAPES"
            className="flex-none h-[40px] ml-[35px]"
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
