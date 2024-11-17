"use client";
import { IoPerson } from "react-icons/io5";
import { useAuth } from "@/Context/AuthContext"; // Usa o contexto
import { useRouter } from "next/navigation";

const GovBar = () => {
  const { user, logOut } = useAuth(); // Obtém o estado e as funções do contexto
  const router = useRouter();

  const handleSair = () => {
    logOut(); // Faz o logout
    router.push("/"); // Redireciona para a página inicial
  };

  return (
    <div className=" bg-white px-6 shadow-md">
      <div className="flex justify-between container mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Logo e título */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.gov.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.gov.br/++theme++padrao_govbr/img/govbr-logo-medium.png"
                alt="Gov.br Logo"
                width={100}
                height={50}
                className="object-contain"
              />
            </a>
            <span className="text-gray-700 font-medium">
              Ministério da Educação/CAPES
            </span>
          </div>

          {/* Links de navegação */}
          <nav>
            <ul className="flex items-center space-x-6 text-blue-600">
              <li>
                <a
                  href="https://www.gov.br/pt-br/orgaos-do-governo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Órgãos do Governo
                </a>
              </li>
              <li>
                <a
                  href="https://www.gov.br/acessoainformacao/pt-br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Acesso à Informação
                </a>
              </li>
              <li>
                <a
                  href="https://www4.planalto.gov.br/legislacao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Legislação
                </a>
              </li>
              <li>
                <a
                  href="https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Acessibilidade
                </a>
              </li>
            </ul>
          </nav>

          {/* Botão de login/saída */}
          <div>
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-gray-700">Olá, {user.name}</span>
                <button
                  onClick={handleSair}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full transition transform hover:scale-105 flex items-center space-x-2"
                >
                  Sair
                </button>
              </div>
            ) : (
              <button
                onClick={() => router.push("LoginGove")}
                className="bg-gray-100 hover:bg-blue-500 hover:text-white text-blue-500 border-none px-4 py-2 rounded-full flex items-center space-x-2 shadow-sm transition transform hover:scale-105"
              >
                <IoPerson size={20} />
                <span>Entrar</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovBar;
