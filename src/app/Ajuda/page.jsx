"use client";
import React, { useState } from "react";
import "./App.css";
import { perguntasAjuda } from "./perguntas";

export default function Ajuda() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [questions, setQuestion] = useState(
    perguntasAjuda["Acesso ao Portal de Periódicos"],
  );

  const sections = [
    "Acesso ao Portal de Periódicos",
    "Acesso remoto e Comunidade Acadêmica Federada (CAFe)",
    "Problemas de acesso ao conteúdo do Portal",
    "Desenvolvimento das coleções do Portal",
    "Treinamentos",
    "Taxas de Processamento de Artigo no âmbito do PADICT",
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handelSection = (section) => {
    setQuestion(perguntasAjuda[section]);
  };

  return (
    <div className="faq-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h3 className="filter-title">Perguntas Frequentes</h3>
        <hr />
        <div className="filter-section">
          {sections.map((section) => (
            <div key={section}>
              <button
                onClick={() => handelSection(section)}
                className="custom-checkbox"
              >
                {section}
                <span className="count"></span>
              </button>
              <hr />
            </div>
          ))}
        </div>
      </aside>
      {/* Main Content */}
      <main className="content">
        <h1 className="filter-title">Perguntas frequentes</h1>
        {questions.map((question, index) => (
          <div
            tabIndex={0}
            key={question.question}
            className="collapse collapse-arrow border-2 mb-2 "
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-medium  ">
              {question.question}
            </div>
            <div className="collapse-content  ">
              <p>{question.answer}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
