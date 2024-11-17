"use client";
import { IoPerson } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ModalLogin from "../ModalLogin";

const BarraGovBr = () => {
  const [showModal, setShowModal] = useState(false);

  const handleEntrar = () => {
    setShowModal(true);
  };

  return (
    <div className="bg-white">
      {showModal && <ModalLogin setShowModal={setShowModal} />}
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-2">
          {/* Logo e Nome do Órgão */}
          <div className="flex items-center space-x-4">
            <div className="flex">
              <a href="https://www.gov.br" target="_blank" className="block">
                <Image
                  className="rounded-lg "
                  src="/Gov.br_logo.svg.png"
                  alt="Placeholder image"
                  width={100}
                  height={50}
                />
              </a>
            </div>
            <div className="hidden lg:block">
              <a
                href="https://www.gov.br/capes"
                target="_blank"
                className="text-lg  text-gray-500"
              >
                Ministério da Educação/CAPES
              </a>
            </div>
          </div>

          {/* Menu de Navegação */}
          <nav>
            <ul className="flex items-center space-x-6">
              <li className="hidden lg:block">
                <a
                  href="https://www.gov.br/pt-br/orgaos-do-governo"
                  target="_blank"
                  className="text-sm text-gray-800 hover:text-gray-600"
                >
                  Órgãos do Governo
                </a>
              </li>
              <li className="hidden lg:block">
                <a
                  href="https://www.gov.br/acessoainformacao/pt-br"
                  target="_blank"
                  className="text-sm text-gray-800 hover:text-gray-600"
                >
                  Acesso à Informação
                </a>
              </li>
              <li className="hidden lg:block">
                <a
                  href="http://www4.planalto.gov.br/legislacao"
                  target="_blank"
                  className="text-sm text-gray-800 hover:text-gray-600"
                >
                  Legislação
                </a>
              </li>
              <li className="hidden lg:block">
                <a
                  href="https://www.gov.br/governodigital/pt-br/acessibilidade-digital"
                  target="_blank"
                  className="text-sm text-gray-800 hover:text-gray-600"
                >
                  Acessibilidade
                </a>
              </li>

              {/* Modo de Contraste */}
              <li>
                <a
                  className="text-sm text-gray-800 hover:text-gray-600"
                  href="#"
                >
                  <i className="fas fa-adjust"></i>
                </a>
              </li>

              {/* Botão de Entrar */}
              <li>
                <button
                  onClick={handleEntrar}
                  className=" bg-blue-[##f8f8f8] text-[#1351b4] py-2 px-4 text-sm rounded-full hover:text-[#f8f8f8] hover:bg-[#1351b4] flex items-center space-x-2"
                >
                  <IoPerson />
                  <span>Entrar</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BarraGovBr;
