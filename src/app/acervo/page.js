    import React from "react";
    import "./style.css";

    const page = () => {
    return (
        <div className="container">
        {/* Filtro lateral */}
        <aside className="filter-panel">
            <div className="filter-section">
            <h3 className="filter-title">Acesso aberto</h3>
            <label>
                <input type="radio" name="access" value="no" />
                Não <span className="count"></span>
            </label>
            </div>
            <hr />
            <div className="filter-section">
            <h3 className="filter-title">Tipo de base de dados</h3>
            <label>
                <input type="checkbox" name="database" value="e-journal" />
                E-Journal <span className="count"></span>
            </label>
            <label>
                <input type="checkbox" name="database" value="encyclopedia" />
                Encyclopedia <span className="count"></span>
            </label>
            <label>
                <input type="checkbox" name="database" value="index" />
                Index <span className="count"></span>
            </label>
            </div>
            <hr />
            <div className="filter-section">
            <h3 className="filter-title">Revisado por pares</h3>
            <label>
                <input type="radio" name="peerReview" value="no" />
                Não <span className="count"></span>
            </label>
            </div>
            <hr />
            <div className="filter-section">
            <h3 className="filter-title">Áreas</h3>
            <label>
                <input type="checkbox" name="area" value="allergy" />
                Alergologia e Imunologia <span className="count"></span>
            </label>
            <label>
                <input type="checkbox" name="area" value="pathology" />
                Anatomia Patológica e Anestesiologia <span className="count"></span>
            </label>
            <label>
                <input type="checkbox" name="area" value="angiology" />
                Angiologia <span className="count"></span>
            </label>
            <label>
                <input type="checkbox" name="area" value="astronomy" />
                Astronomia <span className="count"></span>
            </label>
            <p className="show-more">Mostrar mais</p>
            </div>
            <hr />
            <div className="filter-section">
            <h3 className="filter-title">Idioma</h3>
            <label>
                <input type="checkbox" name="language" value="unknown" />
                Não Identificado <span className="count"></span>
            </label>
            </div>
        </aside>

        {/* Conteúdo Principal */}
        <main className="main-content">
            <h1 className="main-title">Lista de bases e coleções</h1>

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
                </div>
            ))}
            </div>

            {/* Paginação */}
            <div className="pagination">
            <button className="page-button">1</button>
            <button className="page-button">2</button>
            <button className="page-button">3</button>
            </div>

            {/* Rodapé */}
            <footer className="footer">
            <p>&copy; 2024 Hacka Capes</p>
            </footer>
        </main>
        </div>
    );
    };

    export default page;
