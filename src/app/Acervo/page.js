"use client"; // Diretiva para indicar que o componente deve ser executado no lado do cliente

import React, { useState } from "react";
import "./style.css";

const Page = () => {
    // Estado para armazenar a página atual
    const [paginaAtual, setPaginaAtual] = useState(1);

    // Função para atualizar a página ao clicar em um número
    const handlePageClick = (numero) => {
        setPaginaAtual(numero);
        // Aqui você pode adicionar a lógica para alterar a listagem de coleções
        // Exemplo: carregarColecao(numero);
    };

    const [activeIndex, setActiveIndex] = useState([]); // Ajustado para usar o nome correto

    const handleButtonClick = (index) => {
        if (activeIndex.includes(index)) {
            setActiveIndex(activeIndex.filter((i) => i !== index));
        } else {
            setActiveIndex([...activeIndex, index]);
        }
    };

    return (
        <div className="container-acervo  w-full">
            {/* Filtro lateral */}
            <aside className="filter-panel">
                <div className="filter-section">
                    <h3 className="filter-title">Acesso aberto</h3>
                    <label className="lb-radio">
                        <input type="checkbox" name="access" value="no" />
                        Não <span className="count"></span>
                    </label>
                </div>
                <hr />
                <div className="filter-section">
                    <h3 className="filter-title">Tipo de base de dados</h3>
                    <label className="lb-radio">
                        <input type="checkbox" name="database" value="e-journal" />
                        E-Journal <span className="count"></span>
                    </label>
                    <label className="lb-radio">
                        <input type="checkbox" name="database" value="encyclopedia" />
                        Encyclopedia <span className="count"></span>
                    </label>
                    <label className="lb-radio">
                        <input type="checkbox" name="database" value="index" />
                        Index <span className="count"></span>
                    </label>
                </div>
                <hr />
                <div className="filter-section">
                    <h3 className="filter-title">Revisado por pares</h3>
                    <label className="lb-radio">
                        <input type="checkbox" name="peerReview" value="no" />
                        Não <span className="count"></span>
                    </label>
                </div>
                <hr />
                <div className="filter-section">
                    <h3 className="filter-title">Áreas</h3>
                    <label className="lb-radio">
                        <input type="checkbox" name="area" value="allergy" />
                        Alergologia e Imunologia <span className="count"></span>
                    </label>
                    <label className="lb-radio">
                        <input type="checkbox" name="area" value="pathology" />
                        Anatomia Patológica<span className="count"></span>
                    </label>
                    <label className="lb-radio">
                        <input type="checkbox" name="area" value="angiology" />
                        Angiologia <span className="count"></span>
                    </label>
                    <label className="lb-radio">
                        <input type="checkbox" name="area" value="astronomy" />
                        Astronomia <span className="count"></span>
                    </label>
                    <p className="show-more">Mostrar mais</p>
                </div>
                <hr />
                <div className="filter-section">
                    <h3 className="filter-title">Idioma</h3>
                    <label className="lb-radio">
                        <input type="checkbox" name="language" value="unknown" />
                        Não Identificado <span className="count"></span>
                    </label>
                    <hr /> {/* Linha separadora */}
                    <button>Filtrar</button>
                </div>
            </aside>

            {/* Conteúdo Principal */}
            <main className="main-content">
                <h1 className="main-title text-blue2">Lista de bases e coleções</h1>

                {/* Busca */}
                <div className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Inserir termo"
                    />
                    <button className="search-button">Pesquisar</button>
                </div>

                {/* Listagem de Coleções */}
                <div className="collections-list">
                    {[1, 2, 3, 4].map((item, index) => (
                        <div className="collection-item" key={index}>
                            <h3 className="collection-title">Nome da Coleção {item}</h3>
                            <p className="collection-description">
                                Descrição ou informação adicional sobre a coleção.
                            </p>
                            <a href="#" className="collection-link">
                                Acessar coleção
                            </a>
                            <button
                                className={activeIndex.includes(index) ? "button-active" : "star-button"}
                                onClick={() => handleButtonClick(index)}
                            >
                                ★
                            </button>
                        </div>
                    ))}
                </div>

                {/* Paginação */}
                <div className="pagination">
                    <button
                        className={`page-button ${paginaAtual === 1 ? "active" : ""}`}
                        onClick={() => handlePageClick(1)}
                    >
                        1
                    </button>
                    <button
                        className={`page-button ${paginaAtual === 2 ? "active" : ""}`}
                        onClick={() => handlePageClick(2)}
                    >
                        2
                    </button>
                    <button
                        className={`page-button ${paginaAtual === 3 ? "active" : ""}`}
                        onClick={() => handlePageClick(3)}
                    >
                        3
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Page;
