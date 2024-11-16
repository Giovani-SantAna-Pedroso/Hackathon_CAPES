import Link from "next/link";
import Image from "next/image";

const BarraGovBr = () => {
  return (
    <div className="bg-white">
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
                <a
                  href="https://acesso.gov.br"
                  target="_blank"
                  className="bg-blue-600 text-white py-2 px-4 text-sm rounded-sm hover:bg-blue-700 flex items-center space-x-2"
                >
                  <i className="fas fa-user"></i>
                  <span>Entrar</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BarraGovBr;
