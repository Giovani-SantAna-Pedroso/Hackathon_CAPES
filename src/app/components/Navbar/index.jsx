import Image from "next/image";
import Link from "next/link";
import React from "react";

// import Logo from "/Logo_capes.png";

function Navbar() {
  const links = [
    { name: "Sobre", url: "#" },
    { name: "Acervo", url: "#" },
    { name: "Treinamentos", url: "#" },
    { name: "Informativos", url: "#" },
  ];
  return (
    <div className="bg-white flex items-center md:px-8">
      <div>
        <Link href={"/"}>
          <Image
            src={"/Logo_capes.png"}
            width={200}
            height={200}
            alt="Logo capes"
          />
        </Link>
      </div>
      <ol className="flex flex-row w-full px-4 justify-between">
        {links.map((link) => (
          <li className="text-gray1" key={link.name}>
            <Link href={link.url}>{link.name}</Link>
          </li>
        ))}
      </ol>
      <div>
        <button className="text-blue1 border-2 border-blue1 rounded-s font-bold">
          Assesar meu CAPES
        </button>
      </div>
    </div>
  );
}

export default Navbar;
