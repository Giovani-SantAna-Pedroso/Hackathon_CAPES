"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import "./style.css";

const Acervo = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query"); // Obtém o termo de pesquisa da URL
  const [collections, setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query) {
      // Faz a chamada para a API do OpenAlex
      const fetchCollections = async () => {
        setIsLoading(true);
        setError(null);
        try {
          const response = await fetch(
            `https://api.openalex.org/works?search=${encodeURIComponent(query)}`
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
    <div className="container-acervo w-full">
      <main className="main-content">
        <h1 className="main-title text-blue2">
          Resultados da Pesquisa para "{query}"
        </h1>

        {isLoading ? (
          <p>Carregando...</p>
        ) : error ? (
          <p className="text-red-500">Erro: {error}</p>
        ) : collections.length > 0 ? (
          <div className="collections-list">
            {collections.map((collection, index) => (
              <div className="collection-item" key={collection.id || index}>
                <h3 className="collection-title">{collection.title || "Sem título"}</h3>
                <p className="collection-description">
                  {collection.abstract || "Sem descrição disponível."}
                </p>
                <a
                  href={collection.open_access_url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="collection-link"
                >
                  Acessar
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">Nenhum resultado encontrado.</p>
        )}
      </main>
    </div>
  );
};

export default Acervo;
