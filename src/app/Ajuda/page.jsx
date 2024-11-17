"use client";
import React, { useState } from "react";
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
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 bg-white p-4 border-r border-gray-300">
        <h3 className="text-lg font-semibold mb-4">Perguntas Frequentes</h3>
        <hr className="mb-4" />
        <div className="space-y-2">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => handelSection(section)}
              className="block w-full text-left py-2 px-4 bg-gray-50 hover:bg-gray-200 rounded-md"
            >
              {section}
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-6">Perguntas frequentes</h1>
        <div className="space-y-4">
          {questions.map((question, index) => (
            <div
              key={question.question}
              className="border border-gray-300 rounded-md"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-t-md"
              >
                <h2 className="text-lg font-medium">{question.question}</h2>
              </button>
              {activeIndex === index && (
                <div className="px-4 py-2 bg-white">
                  <p>{question.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
