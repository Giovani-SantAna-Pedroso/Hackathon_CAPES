import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

function AdvancedSearch({ inputValue, setInputValue }) {
  const [selectedOption, setSelectedOption] = useState("");
  const options = { condicao: "e", campot: "titulo", exato: "" };

  const [filtros, setFiltros] = useState([]);

  const defautlStaly = "bg-white border p-2 mr-2 rounded";

  const handleAddFiltor = () => {
    const cpFiltros = [...filtros];
    cpFiltros.push({ condição: "", campo: "", contem: "", busca: "" });
    setFiltros(cpFiltros);
    console.log(cpFiltros);
  };

  return (
    <div>
      <div>
        <select
          className={defautlStaly}
          id="select"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="Qualquer campo">Qualquer campo</option>
          <option value="Titulo">Titulo</option>
          <option value="Autor">Autor</option>
          <option value="Assunto">Assunto</option>
          <option value="Editor">Editor</option>
        </select>
        <select
          className={defautlStaly}
          id="select"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="Contém">Contém</option>
          <option value="É (exato)">É (exato)</option>
        </select>
        <input
          className="mx-6 rounded p-2 bg-white "
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="O que você esta procurando? "
        />
      </div>
      {filtros.map((filtro, index) => (
        <div className="my-2" key={index}>
          <Filtro setFiltros={setFiltros} index={index} infos={filtros} />
        </div>
      ))}
      <button className="btn btn-link " onClick={handleAddFiltor}>
        Acionar filtro
      </button>
    </div>
  );
}

const Filtro = ({ id, removeFiltro, filtro }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const defautlStaly = "bg-white border p-2 mr-2 rounded";
  return (
    <div className="flex items-center">
      <select
        className={defautlStaly}
        id="select"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="E">E</option>
        <option value="Nao">Não</option>
        <option value="Ou">Ou</option>
      </select>
      <select
        className={defautlStaly}
        id="select"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="Qualquer campo">Qualquer campo</option>
        <option value="Titulo">Titulo</option>
        <option value="Autor">Autor</option>
        <option value="Assunto">Assunto</option>
        <option value="Editor">Editor</option>
      </select>
      <select
        className={defautlStaly}
        id="select"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="Contém">Contém</option>
        <option value="É (exato)">É (exato)</option>
      </select>
      <input
        className="mx-6 rounded p-2 bg-white "
        // value={inputValue}
        // onChange={(e) => setInputValue(e.target.value)}
        placeholder="Digite os termos de busca"
      />
      <button className="active:text-[22px] text-red-400 text-[32px]">
        <MdDeleteForever />
      </button>
    </div>
  );
};

export default AdvancedSearch;
