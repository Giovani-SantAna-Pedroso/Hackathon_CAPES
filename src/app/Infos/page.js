"use client";

import React from "react";
import styles from "./app.module.css"; // Certifique-se de que o app.module.css está na mesma pasta.

export default function Infos() {
    const informativos = [
        {
            title: "Pesquisas em Ciências de Alimentos são destaques em publicação",
            date: "14/11/2024",
            description: "Textos constam do Journal of Food Science e são resultados de estudos realizados no Brasil, Argenti ...",
            image: "", // Substitua pela URL da imagem ou importe diretamente
        },
        {
            title: "CAPES e Elsevier premiam 15 cientistas mulheres",
            date: "07/11/2024",
            description: "São três vencedoras em cada região do País; em relação às áreas, são cinco de Exatas, cinco ...",
            image: "",
        },
        {
            title: "Treinamento discute publicação de artigo na Biochemical Society",
            date: "06/11/2024",
            description: "Evento promovido pela PortlandPress acontece quinta-feira às 11h ...",
            image: "",
        },
        {
            title: "Análise Textual, Design e Questões de Gênero são temas de cursos",
            date: "05/11/2024",
            description: "Treinamento será nos dias 6, 14 e 18 de novembro ...",
            image: "",
        },
        {
            title: "Cerimônia de premiação para mulheres ocorre na quarta-feira",
            date: "05/11/2024",
            description: "Solenidade terá início às 14h e será realizada no auditório da CAPES, com transmissão ao vivo ...",
            image: "",
        },
        {
            title: "Premiação reconhece pesquisadoras de todo o Brasil",
            date: "29/10/2024",
            description: "As 15 cientistas selecionadas foram destaque nas áreas de Exatas, Médicas e Humanas ...",
            image: "",
        },
    ];

    return (
        <div className={styles.container}>
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
            <main className={styles.informativos}>
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
                            <button className={styles.button}>Leia mais</button>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
}
