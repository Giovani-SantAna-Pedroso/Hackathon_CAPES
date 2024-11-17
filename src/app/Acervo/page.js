'use client';
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FaLockOpen, FaDownload, FaStar } from "react-icons/fa"; // React Icons

const Acervo = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [collections, setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]); // Estado para armazenar favoritos

  // Função para carregar os favoritos do localStorage
  const carregarFavoritos = () => {
    const favoritosSalvos = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavorites(favoritosSalvos);
  };

  // Função para favoritar ou desfavoritar um artigo
  const toggleFavorite = (collection) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.some(fav => fav.id === collection.id)
        ? prevFavorites.filter(fav => fav.id !== collection.id)
        : [...prevFavorites, collection]; // Adiciona ou remove o artigo

      // Salva os favoritos no localStorage
      localStorage.setItem("favoritos", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  useEffect(() => {
    carregarFavoritos(); // Carrega favoritos ao montar o componente
  }, []);

  useEffect(() => {
    if (query) {
      const fetchCollections = async () => {
        setIsLoading(true);
        setError(null);
        try {
          const response = await fetch(
            `https://api.openalex.org/works?search=${encodeURIComponent(query)}&filter=is_oa:true` // OA filter
          );
          if (!response.ok) {
            throw new Error("Erro ao buscar dados da API.");
          }
          const data = await response.json();
          setCollections(data.results || []);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      };
      fetchCollections();
    }
  }, [query]);

  return (
    <div className="w-full px-6 py-8 bg-gray-100 min-h-screen">
      <main className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center text-blue-600 mb-8">
          Resultados da Pesquisa para "<span className="italic">{query}</span>"
        </h1>

        {isLoading ? (
          <p className="text-center text-lg">Carregando...</p>
        ) : error ? (
          <p className="text-center text-red-500">{`Erro: ${error}`}</p>
        ) : collections.length > 0 ? (
          <div className="space-y-6">
            {collections.map((collection, index) => {
              const isFavorite = favorites.some(fav => fav.id === collection.id); // Verifica se o artigo é favorito
              return (
                <div
                  key={collection.id || index}
                  className="bg-white shadow-lg rounded-lg p-6 border border-gray-300 hover:shadow-2xl transition-all"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800">
                      {collection.title || "Sem título"}
                    </h3>
                    <div className="flex items-center">
                      <div className="bg-green-200 text-green-800 px-3 py-1 rounded flex items-center">
                        <FaLockOpen className="mr-2" />
                        <span>Acesso aberto</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Autor:</strong>{" "}
                    {collection.authorships?.map(author => author.author.display_name).join(", ") || "Desconhecido"}
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
                        isFavorite ? "text-yellow-400" : "text-gray-400"
                      } hover:text-yellow-500 text-2xl transition-all`}
                    >
                      <FaStar />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-600">Nenhum resultado encontrado.</p>
        )}
      </main>
    </div>
  );
};

export default Acervo;
