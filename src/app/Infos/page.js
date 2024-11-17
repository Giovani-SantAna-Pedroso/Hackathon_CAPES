"use client";

import React, { useState } from "react";
import styles from "./app.module.css";

export default function Infos() {
  const [favorites, setFavorites] = useState([]); // Estado para controlar os favoritos

  const toggleFavorite = (index) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(index)) {
        // Remove do favoritos se já estiver
        return prevFavorites.filter((item) => item !== index);
      } else {
        // Adiciona aos favoritos se não estiver
        return [...prevFavorites, index];
      }
    });
  };

  const informativos = [
    {
      title: "Pesquisas em Ciências de Alimentos são destaques em publicação",
      date: "14/11/2024",
      description:
        "Textos constam do Journal of Food Science e são resultados de estudos realizados no Brasil, Argenti ...",
      image: "https://www.periodicos.capes.gov.br/images/Matria_Journal.png", // Substitua pela URL da imagem ou importe diretamente
    },
    {
      title: "CAPES e Elsevier premiam 15 cientistas mulheres",
      date: "07/11/2024",
      description:
        "São três vencedoras em cada região do País; em relação às áreas, são cinco de Exatas, cinco ...",
      image:
        "https://www.periodicos.capes.gov.br/images/news/Matria_Cerimnia_CAPES_Elsevier.png",
    },
    {
      title: "Treinamento discute publicação de artigo na Biochemical Society",
      date: "06/11/2024",
      description:
        "Evento promovido pela PortlandPress acontece quinta-feira às 11h ...",
      image:
        "https://www.periodicos.capes.gov.br/images/news/Matria_Biochemical_Society.png",
    },
    {
      title: "Análise Textual, Design e Questões de Gênero são temas de cursos",
      date: "05/11/2024",
      description: "Treinamento será nos dias 6, 14 e 18 de novembro ...",
      image:
        "https://www.periodicos.capes.gov.br/images/news/Treinamentos_novembro_2024.png",
    },
    {
      title: "Cerimônia de premiação para mulheres ocorre na quarta-feira",
      date: "05/11/2024",
      description:
        "Solenidade terá início às 14h e será realizada no auditório da CAPES, com transmissão ao vivo ...",
      image:
        "https://www.periodicos.capes.gov.br/images/news/Matria_CAPES_Elsevier.png",
    },
    {
      title: "Premiação reconhece pesquisadoras de todo o Brasil",
      date: "29/10/2024",
      description:
        "As 15 cientistas selecionadas foram destaque nas áreas de Exatas, Médicas e Humanas ...",
      image:
        "https://www.periodicos.capes.gov.br/images/news/Prmio_Capes_Elsevier_2024.png",
    },
  ];

  return (
    <div className={styles.container + " flex flex-col md:flex-row w-full "}>
      {/* Barra lateral */}
      <aside className={styles.sidebar}>
        <h2>Informativos</h2>
        <input
          type="text"
          placeholder="Filtrar"
          className={styles.searchInput}
        />
        <div className={styles.filters}>
          <label>
            <input type="checkbox" />
            Todos os assuntos
          </label>
          <label>
            <input type="checkbox" />
            Acervo
          </label>
          <label>
            <input type="checkbox" />
            Artigo
          </label>
          <label>
            <input type="checkbox" />
            Eventos
          </label>
          <label>
            <input type="checkbox" />
            Suporte
          </label>
          <label>
            <input type="checkbox" />
            Treinamentos
          </label>
          <label>
            <input type="checkbox" />
            WebTV
          </label>
        </div>
      </aside>

      {/* Informativos */}
      <main className={styles.informativos + " grid-cols-1 "}>
        {informativos.map((info, index) => (
          <div key={index} className={styles.card}>
            {/* Espaço da Imagem */}
            <div className={styles.imagePlaceholder}>
              {info.image ? (
                <img
                  src={info.image}
                  alt={info.title}
                  className={styles.image}
                />
              ) : (
                <div className={styles.noImage}>Imagem não disponível</div>
              )}
            </div>
            {/* Conteúdo */}
            <div className={styles.content}>
              <h3>{info.title}</h3>
              <p>{info.description}</p>
              <span>{info.date}</span>
              <div className={styles.actions}>
                <button className={styles.button}>Leia mais</button>
                <button
                  className={`${styles.starButton} ${favorites.includes(index) ? styles.active : styles.inactive}`}
                  onClick={() => toggleFavorite(index)}
                >
                  ★
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
