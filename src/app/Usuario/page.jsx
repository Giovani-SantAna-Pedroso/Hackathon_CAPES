"use client";
import { IoHomeOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { TbClick } from "react-icons/tb";
import { IoPersonOutline } from "react-icons/io5";
import Link from "next/link";
import ContainerArticles from "./ContainerArticles";
import CardArticle from "./CardArticles";
import { useEffect, useState } from "react";
import { synthesizeText } from "../api/synthesize/routes";
import { GoGraph } from "react-icons/go";
import SideBar from "./SideBar";

function Usuario() {
  const [contentArticle, setContentArticle] = useState([
    {
      img: "",
      id: 0,
      description: "",
    },
  ]);


  const usuario = "Kleber";
  const itemNavegation = [
    { name: "Home", link: "/Usuario", icon: <IoHomeOutline /> },
    {
      name: "Minhas Pesquisas",
      link: "/Usuario/favoritos",
      icon: <MdHistory />,
    },
    { name: "Descobrir", link: "#", icon: <TbClick /> },
    { name: "Dashboard", link: "dashboard", icon: <GoGraph /> },
    { name: "Perfil", link: "/Administrativo", icon: <IoPersonOutline /> },
  ];

  const articlesLendo = [
    {
      img: "/placeholder1.png",
      id: 22,
      description: "Explorando o futuro da ciência e tecnologia.",
    },
    {
      img: "/placeholder1.png",
      id: 21,
      description: "A importância da pesquisa científica no Brasil.",
    },
    {
      img: "/placeholder1.png",
      id: 24,
      description: "Como as novas tecnologias estão mudando a educação.",
    },
    {
      img: "/placeholder1.png",
      id: 25,
      description: "Tendências em pesquisa acadêmica para 2025.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-blue-50 to-gray-200 px-8 py-6">
      <h1 className="text-left text-blue-600 font-extrabold text-5xl  py-8 mb-8">
        {`Olá ${usuario}, seja bem-vindo`}
      </h1>

      <div className="flex flex-row">
        {/* Navegação lateral */}
        <SideBar />
        {/* Artigos */}
        <div className="w-3/4">
          <h2 className="text-blue-600 font-bold text-3xl mb-4">
            Continuar lendo
          </h2>
          <ContainerArticles>
            {articlesLendo.map((article) => (
              <div key={article.id} className="my-6">
                <CardArticle
                  id={article.id}
                  conteudo={article.description}
                  audioSrc={`public/audio/${article.id}audio.mp3`}
                  img={article.img}
                />
              </div>
            ))}
          </ContainerArticles>

          <h2 className="text-blue-600 font-bold text-3xl mt-12 mb-4">
            Recomendados
          </h2>
          <p className="text-gray-700">
            Nenhum conteúdo recomendado no momento.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Usuario;
