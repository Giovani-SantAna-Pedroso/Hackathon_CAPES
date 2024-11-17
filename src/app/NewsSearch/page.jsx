'use client';
import React, { useState } from "react";
import axios from "axios";

const NewsSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleSearch = async () => {
    if (!query) {
      setError("Por favor, insira o termo de busca.");
      return;
    }

    try {
      const response = await axios.get("/api/news", {
        params: { query },
      });

      setResults(response.data || []);
      setError(null); // Limpa erros anteriores
      setCurrentPage(1); // Reseta para a primeira página ao realizar uma nova busca
    } catch (err) {
      setError("Erro ao buscar notícias. Verifique as configurações.");
      console.error(err.message);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Calcular os itens para exibir na página atual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = results.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Pesquisa de Notícias
      </h2>
      <div className="space-y-4">
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Digite o termo de busca (ex: tecnologia)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleSearch}
        >
          Pesquisar Notícias
        </button>
      </div>

      {error && (
        <p className="text-red-500 mt-4 text-center font-semibold">{error}</p>
      )}

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">Resultados:</h3>
        {currentItems.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentItems.map((news, index) => (
              <li
                key={index}
                className="p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-200"
              >
                <strong className="block text-lg font-bold text-blue-700 mb-2">
                  {news.title}
                </strong>
                <p className="text-gray-600 mb-4">{news.snippet}</p>
                <a
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Leia mais
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 text-center">Nenhuma notícia encontrada.</p>
        )}
      </div>

      {/* Paginação */}
      {results.length > itemsPerPage && (
        <div className="mt-6 flex justify-center items-center space-x-4">
          <button
            className={`px-4 py-2 rounded-md text-white ${
              currentPage === 1
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Anterior
          </button>
          <span className="font-medium text-gray-700">
            Página {currentPage} de {Math.ceil(results.length / itemsPerPage)}
          </span>
          <button
            className={`px-4 py-2 rounded-md text-white ${
              currentPage === Math.ceil(results.length / itemsPerPage)
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            disabled={currentPage === Math.ceil(results.length / itemsPerPage)}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Próxima
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsSearch;
