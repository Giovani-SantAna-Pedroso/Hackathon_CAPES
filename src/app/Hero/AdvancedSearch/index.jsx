import React, { useState } from "react";

function AdvancedSearch() {
  const [selectedOption, setSelectedOption] = useState("");
  const defautlStaly = "bg-white border p-2 mr-2 rounded";
  return (
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
      <input placeholder="asf" />
    </div>
  );
}

export default AdvancedSearch;
