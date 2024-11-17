"use client";
import React, { useEffect, useState } from "react";
import { FaLockOpen, FaDownload, FaStar } from "react-icons/fa";
import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { TbClick } from "react-icons/tb";
import Link from "next/link";
import SideBar from "../SideBar";

const itemNavegation = [
  { name: "Home", link: "/Usuario", icon: <IoHomeOutline /> },
  { name: "Minhas Pesquisas", link: "/Usuario/favoritos", icon: <MdHistory /> },
  { name: "Descobrir", link: "#", icon: <TbClick /> },
  { name: "Perfil", link: "#", icon: <IoPersonOutline /> },
];

export default function Favoritos() {
  const [favorites, setFavorites] = useState([]);

  // Carregar favoritos do localStorage
  const carregarFavoritos = () => {
    const favoritosSalvos = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavorites(favoritosSalvos);
  };

  useEffect(() => {
    carregarFavoritos();
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-gray-100 via-blue-50 to-gray-200 min-h-screen flex">
      {/* Menu Lateral de Navegação */}

      {/* Conteúdo Principal */}
      <div className="flex-grow">
        <main className=" mx-auto px-6  py-8 flex-grow">
          <h1 className="text-4xl font-extrabold text-left text-blue-600 mb-8">
            Meus Favoritos
          </h1>
          <div className="flex flex-row">
            <SideBar />
            <div>
              {favorites.length > 0 ? (
                <div className="space-y-6">
                  {favorites.map((collection, index) => (
                    <div
                      key={collection.id || index}
                      className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-all"
                    >
                      <div className="flex items-center mb-4">
                        <div className="bg-green-200 text-green-800 px-3 py-1 rounded mr-4">
                          <FaLockOpen className="inline-block mr-1" />
                          Acesso aberto
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 flex-grow">
                          {collection.title || "Sem título"}
                        </h3>
                      </div>

                      <p className="text-gray-700 text-base mb-2">
                        {collection.abstract
                          ? collection.abstract.substring(0, 200) + "..."
                          : "Sem resumo disponível."}
                      </p>

                      <div className="flex justify-between items-center">
                        <a
                          href={`https://doi.org/${collection.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Acessar
                        </a>

                        {collection.download_url && (
                          <a
                            href={collection.download_url}
                            download
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                          >
                            <FaDownload className="inline-block mr-1" />
                            Baixar
                          </a>
                        )}

                        <button
                          className="text-yellow-400 hover:text-yellow-500 text-2xl"
                          title="Favorito"
                        >
                          <FaStar />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-lg text-gray-600">
                  Você ainda não tem favoritos salvos.
                </p>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
