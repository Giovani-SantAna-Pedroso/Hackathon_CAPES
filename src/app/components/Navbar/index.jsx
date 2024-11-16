import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  const links = [
    { name: "Sobre", url: "/Sobre" },
    { name: "Acervo", url: "/Acervo" },
    { name: "Treinamentos", url: "/Treinamento" },
    { name: "Informativos", url: "Informativos" },
  ];

  return (
    <div className="bg-white flex items-center justify-between px-6 py-4 shadow-md">
      {/* Logo */}
      <div>
        <Link href={"/"}>
          <Image
            src={"/Logo_capes.png"}
            width={150}
            height={150}
            alt="Logo CAPES"
            className="hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>

      {/* Links */}
      <ol className="flex gap-6">
        {links.map((link) => (
          <li key={link.name} className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            <Link href={link.url}>{link.name}</Link>
          </li>
        ))}
      </ol>

      {/* Botão */}
      <div>
        <button className="text-white bg-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
         <Link href={"/Usuario"}>Acessar meu CAPES</Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
