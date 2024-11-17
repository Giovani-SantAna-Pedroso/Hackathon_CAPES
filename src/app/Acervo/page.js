"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaLockOpen, FaLock, FaDownload, FaStar, FaSearch } from "react-icons/fa";
import BotaoGetAudio from "../components/BotaoGetAudio";

const Acervo = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [collections, setCollections] = useState([]);
  const [filteredCollections, setFilteredCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [searchFilter, setSearchFilter] = useState(query || "");
  const [currentPage, setCurrentPage] = useState(1);
  const [institutionName, setInstitutionName] = useState("");
  const [availableInstitutions] = useState([
    "Universidade de São Paulo (USP)",
    "Universidade Estadual de Campinas (UNICAMP)",
    "Universidade Federal do Rio de Janeiro (UFRJ)",
    "Universidade Estadual Paulista (UNESP)",
    "Universidade Estadual de Londrina (UEL)",
    "Universidade de Brasília (UnB)",
    "Universidade Estadual de Maringá (UEM)",
    "Universidade Federal de Minas Gerais (UFMG)",
    "Universidade Estadual do Rio de Janeiro (UERJ)",
    "Universidade Federal do Paraná (UFPR)",
  ]);
  const itemsPerPage = 5;

  const carregarFavoritos = () => {
    const favoritosSalvos = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavorites(favoritosSalvos);
  };

  const toggleFavorite = (collection) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.some(
        (fav) => fav.id === collection.id
      )
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
        `https://api.openalex.org/works?search=${encodeURIComponent(query)}&filter=is_oa:true`
      );
      if (!response.ok) {
        throw new Error("Erro ao buscar dados da API.");
      }
      const data = await response.json();
      setCollections(data.results || []);
      setFilteredCollections(data.results || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchFilter.trim() !== "") {
      router.push(`/Acervo?query=${encodeURIComponent(searchFilter.trim())}`);
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

  const handleInstitutionCheck = (collection) => {
    const isAvailable = availableInstitutions.includes(institutionName);
    alert(
      isAvailable
        ? "O artigo está disponível na sua instituição!"
        : "O artigo não está disponível na sua instituição."
    );
  };

  return (
    <div className="w-full px-6 py-8 bg-white min-h-screen sm:px-4 lg:px-8">
      <main className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-2xl lg:text-4xl font-extrabold text-[#003060] mb-8">
          Resultados da Pesquisa para &quot;
          <span className="italic">{searchFilter}</span>&quot;
        </h1>

        <div className="mb-6">
          <form onSubmit={handleSearch} className="flex flex-wrap justify-center gap-4">
            <input
              type="text"
              placeholder="Pesquise por título ou autor..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full sm:w-3/4 lg:w-1/2 p-3 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-[#003060]"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#003060] hover:bg-[#34B5DF] text-white font-bold py-2 px-4 rounded-lg transition-all"
            >
              Buscar
            </button>
          </form>
        </div>

        {isLoading ? (
          <p className="text-center text-lg text-[#003060]">Carregando...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : filteredCollections.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {getPaginatedCollections().map((collection, index) => {
              const isOpenAccess = index % 2 === 0;
              const isFavorite = favorites.some((fav) => fav.id === collection.id);

              return (
                <div
                  key={collection.id}
                  className="bg-white rounded-lg shadow-md p-6 transition-all transform hover:scale-105"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-[#003060]">
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
                        </>
                      )}
                    </div>
                  </div>

                  {/* Outros detalhes do card */}
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-lg text-[#003060]">
            Nenhum artigo encontrado.
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="bg-[#34B5DF] hover:bg-[#003060] text-white font-bold py-2 px-4 rounded-l-lg transition-all"
          >
            Anterior
          </button>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="bg-[#34B5DF] hover:bg-[#003060] text-white font-bold py-2 px-4 rounded-r-lg transition-all"
          >
            Próximo
          </button>
        </div>
      </main>
    </div>
  );
};

export default Acervo;
