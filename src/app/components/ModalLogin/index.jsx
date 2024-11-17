import { logIn } from "@/app/utils/urls";
import React from "react";

function ModalLogin({ setShowModal }) {
  const handleLogin = (e) => {
    e.preventDefault();
    logIn();
  };

  return (
    <div
      onClick={() => setShowModal(false)}
      className="flex justify-center items-center fixed top-0 left-0 w-screen bg-[#1a1a1aaa] h-screen"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white shadow-md rounded-md flex flex-col md:flex-row p-6 md:p-12 w-full max-w-4xl"
      >
        <div className="md:w-1/2 flex flex-col items-center justify-center mb-6 md:mb-0">
          <img
            src="/logo-periodicos-removebg-preview.png"
            alt="Periódicos"
            className="w-full max-w-xs mb-6"
          />
          <p className="text-center text-gray-700">
            Não perca a chance de <strong>transformar</strong> sua pesquisa:
            cadastre-se no{" "}
            <a href="#" className="text-blue-500 hover:underline font-semibold">
              Portal de Periódicos
            </a>{" "}
            e tenha acesso ao melhor do conhecimento científico!
          </p>
        </div>

        <div className="md:w-1/2 bg-gray-50 p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
            Faça seu Cadastro no Portal{" "}
            <span className="text-blue-500">Capes</span>
          </h2>
          <form onSubmit={handleLogin} className="flex flex-col">
            {/* Email Field */}
            <label htmlFor="email" className="text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu email"
              className="mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <label htmlFor="password" className="text-gray-600 mb-2">
              Senha
            </label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              className="mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600"
            >
              Entrar
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-4">
            <a href="#" className="text-blue-500 hover:underline">
              Acesse o gov.br
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ModalLogin;
