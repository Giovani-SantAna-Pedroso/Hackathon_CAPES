"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation"; // useRouter e useSearchParams
import { FaLockOpen, FaLock, FaDownload, FaStar, FaSearch } from "react-icons/fa"; // React Icons

const Acervo = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [collections, setCollections] = useState([]);
  const [filteredCollections, setFilteredCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]); // Estado para armazenar favoritos
  const [searchFilter, setSearchFilter] = useState(query || ""); // Filtro de pesquisa
  const [currentPage, setCurrentPage] = useState(1); // Página atual
  const [showInstitutions, setShowInstitutions] = useState(null); // Estado para exibir instituições
  const itemsPerPage = 5; // Número de artigos por página

  const carregarFavoritos = () => {
    const favoritosSalvos = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavorites(favoritosSalvos);
  };

  const toggleFavorite = (collection) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.some((fav) => fav.id === collection.id)
        ? prevFavorites.filter((fav) => fav.id !== collection.id)
        : [...prevFavorites, collection];

      localStorage.setItem("favoritos", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const getPaginatedCollections = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredCollections.slice(startIndex, endIndex);
  };

  const fetchCollections = async (query) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.openalex.org/works?search=${encodeURIComponent(query)}&filter=is_oa:true`,
      );
      if (!response.ok) {
        throw new Error("Erro ao buscar dados da API.");
      }
      const data = await response.json();
      setCollections(data.results || []);
      setFilteredCollections(data.results || []); // Inicializa o filtro com todas as coleções
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchFilter.trim() !== "") {
      router.push(`/acervo?query=${encodeURIComponent(searchFilter.trim())}`); // Atualiza a URL com a nova busca
    }
  };

  useEffect(() => {
    carregarFavoritos();
  }, []);

  useEffect(() => {
    if (query) {
      setSearchFilter(query);
      fetchCollections(query);
    }
  }, [query]);

  const totalPages = Math.ceil(filteredCollections.length / itemsPerPage);

  return (
    <div className="w-full px-6 py-8 bg-gray-50 min-h-screen">
      <main className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center text-blue-600 mb-8">
          Resultados da Pesquisa para &quot;
          <span className="italic">{searchFilter}</span>&quot;
        </h1>

        {/* Barra de pesquisa */}
        <div className="mb-6">
          <form onSubmit={handleSearch} className="flex justify-center">
            <input
              type="text"
              placeholder="Pesquise por título ou autor..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-3/4 sm:w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all"
            >
              Buscar
            </button>
          </form>
        </div>

        {isLoading ? (
          <p className="text-center text-lg">Carregando...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : filteredCollections.length > 0 ? (
          <div className="space-y-8">
            {getPaginatedCollections().map((collection, index) => {
              const isOpenAccess = index % 2 === 0; // Alterna entre Acesso Aberto e Restrito
              const isFavorite = favorites.some((fav) => fav.id === collection.id);

              return (
                <div
                  key={collection.id}
                  className="bg-white rounded-lg shadow-md p-6 transition-all transform hover:scale-105"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800">
                      {collection.title || "Sem título"}
                    </h3>
                    <div
                      className={`${
                        isOpenAccess
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      } px-3 py-1 rounded flex items-center`}
                    >
                      {isOpenAccess ? (
                        <>
                          <FaLockOpen className="mr-2" />
                          <span>Acesso aberto</span>
                        </>
                      ) : (
                        <>
                          <FaLock className="mr-2" />
                          <span>Acesso restrito</span>
                          <button
                            className="ml-2 text-blue-600 hover:text-blue-800"
                            onClick={() =>
                              setShowInstitutions(
                                showInstitutions === collection.id
                                  ? null
                                  : collection.id
                              )
                            }
                          >
                            <FaSearch />
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Autor:</strong>{" "}
                    {collection.authorships?.map((author) => author.author.display_name).join(", ") ||
                      "Desconhecido"}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    <strong>Publicado em:</strong>{" "}
                    {collection.publication_date || "Indisponível"}
                  </p>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    {collection.abstract
                      ? collection.abstract.substring(0, 200) + "..."
                      : "Sem resumo disponível."}
                  </p>

                  {showInstitutions === collection.id && (
                    <div className="mt-4 border-t border-gray-300 pt-4">
                      <h4 className="text-lg font-bold text-gray-800 mb-2">
                        Instituições com acesso:
                      </h4>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>Universidade A</li>
                        <li>Universidade B</li>
                        <li>Instituto C</li>
                      </ul>
                    </div>
                  )}

                  <div className="flex justify-between items-center mt-4">
                    <a
                      href={`https://doi.org/${collection.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transition-all"
                    >
                      Acessar
                    </a>

                    {collection.download_url && (
                      <a
                        href={collection.download_url}
                        download
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-lg transition-all"
                      >
                        <FaDownload className="inline-block mr-1" />
                        Baixar
                      </a>
                    )}

                    <button
                      onClick={() => toggleFavorite(collection)}
                      className={`${
                        isFavorite ? "text-yellow-500" : "text-gray-500"
                      } hover:text-yellow-700 transition-all`}
                    >
                      <FaStar />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-lg">Nenhum resultado encontrado.</p>
        )}

        <div className="flex justify-between items-center mt-8">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg disabled:bg-gray-300 transition-all"
          >
            Anterior
          </button>
          <span className="text-lg font-semibold">{`Página ${currentPage} de ${totalPages}`}</span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg disabled:bg-gray-300 transition-all"
          >
            Próxima
          </button>
        </div>
      </main>
    </div>
  );
};

export default Acervo;
