"use client";
import { IoHomeOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { TbClick } from "react-icons/tb";
import { IoPersonOutline } from "react-icons/io5";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GoGraph } from "react-icons/go";
import SideBar from "./SideBar";
import ContainerArticles from "./ContainerArticles";
import CardArticle from "./CardArticles";

function Usuario() {
  const usuario = "Kleber";

  // Navegação lateral
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

  // Dados de "Continuar Lendo"
  const articlesLendo = [
    {
      id: 1,
      img: "/pela.webp",
      title: "O Negro no Futebol Brasileiro",
      authors: "Christian Ferreira Mackedanz, Elaine Tonini Ferreira, Gabriel Gomes da Silva",
      publishedDate: "2021-06-30",
      description: "Sem resumo disponível.",
    },
    {
      id: 2,
      img: "/energia.jpeg",
      title: "A evolução da energia sustentável",
      authors: "Mariana Silva, José Souza",
      publishedDate: "2023-05-12",
      description: "Como a energia sustentável tem impactado o mundo moderno.",
    },
    {
      id: 3,
      img: "/ia.webp",
      title: "Inteligência Artificial na Educação",
      authors: "Ana Clara, Roberto Lima",
      publishedDate: "2024-01-22",
      description: "Explorando o impacto da IA no ensino e aprendizado.",
    },
  ];

  // Dados de "Recomendados"
  const articlesRecomendados = [
    {
      id: 4,
      img: "/empresa.jfif",
      title: "Transformação digital nas empresas",
      authors: "João Carlos, Marina Alves",
      publishedDate: "2022-11-11",
      description: "A importância da transformação digital no mundo corporativo.",
    },
    {
      id: 5,
      img: "/Mudancas-Climaticas.jpg",
      title: "Mudanças climáticas: desafios globais",
      authors: "Paula Mendes, Ricardo Silva",
      publishedDate: "2023-08-21",
      description: "Como o mundo está enfrentando os desafios das mudanças climáticas.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-blue-50 to-gray-200 px-8 py-6">
      {/* Saudação */}
      <h1 className="text-left text-blue-600 font-extrabold text-5xl py-8 mb-8">
        {`Olá ${usuario}, seja bem-vindo`}
      </h1>

      <div className="flex flex-row">
        {/* Navegação lateral */}
        <SideBar />

        {/* Conteúdo principal */}
        <div className="w-3/4">
          {/* Seção Continuar Lendo */}
          <h2 className="text-blue-600 font-bold text-3xl mb-4">
            Continuar lendo
          </h2>
          <ContainerArticles>
            {articlesLendo.map((article) => (
              <div key={article.id} className="my-6">
                <CardArticle
                  id={article.id}
                  img={article.img}
                  title={article.title}
                  authors={article.authors}
                  publishedDate={article.publishedDate}
                  description={article.description}
                />
              </div>
            ))}
          </ContainerArticles>

          {/* Seção Recomendados */}
          <h2 className="text-blue-600 font-bold text-3xl mt-12 mb-4">
            Recomendados
          </h2>
          <ContainerArticles>
            {articlesRecomendados.map((article) => (
              <div key={article.id} className="my-6">
                <CardArticle
                  id={article.id}
                  img={article.img}
                  title={article.title}
                  authors={article.authors}
                  publishedDate={article.publishedDate}
                  description={article.description}
                />
              </div>
            ))}
          </ContainerArticles>
        </div>
      </div>
    </div>
  );
}

export default Usuario;
