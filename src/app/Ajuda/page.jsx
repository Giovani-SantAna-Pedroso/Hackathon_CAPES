"use client"
import React, { useState } from "react";
import "./App.css";


export default function Ajuda() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const questions = [
        {
            question: "Como é feito o acesso ao conteúdo do Portal?",
            answer: "O acesso ao conteúdo do Portal é realizado por meio de instituições participantes ou por acesso remoto mediante autenticação."
        },
        {
            question: "Quem pode acessar o conteúdo assinado pelo Portal?",
            answer: "O conteúdo é acessível a instituições participantes e seus membros, como professores, alunos e pesquisadores."
        },
        {
            question: "Como saber se a minha instituição acessa o Portal de Periódicos?",
            answer: "Você pode verificar diretamente com a sua instituição ou consultar a lista de participantes no site do Portal de Periódicos."
        },
        {
            question: "É necessário pagar para usar o Portal?",
            answer: "O acesso é gratuito para instituições participantes, mas pode haver custos indiretos relacionados à infraestrutura da instituição."
        },
        {
            question: "Existe algum conteúdo do Portal de Periódicos que pode ser acessado gratuitamente?",
            answer: "Sim, parte do conteúdo está disponível em acesso aberto, sem necessidade de autenticação."
        },
        {
            question: "Existem normas para a cópia, impressão ou armazenamento digital (download) das coleções assinadas pela CAPES e disponíveis no Portal de Periódicos?",
            answer: "Sim, o uso do material deve obedecer às normas de direitos autorais e restrições especificadas pelos editores."
        },
        {
            question: "Quais as modalidades de acesso do Portal de Periódicos da CAPES?",
            answer: "As modalidades incluem acesso local (rede da instituição) e remoto (via VPN ou login remoto)."
        },
        {
            question: "Como uma instituição participante pode alterar seus dados de acesso junto ao Portal de Periódicos?",
            answer: "A instituição deve entrar em contato com a CAPES para atualizar ou corrigir seus dados de acesso."
        }
    ];

    return (
        <div className="faq-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <h3 className="filter-title">Perguntas Frequentes</h3>
                <hr />
                <div className="filter-section">
                    <label className="custom-checkbox">
                        Acesso ao Portal de Periódicos <span className="count"></span>
                    </label>
                    <hr />
                    <label className="custom-checkbox">
                        Acesso remoto e Comunidade Acadêmica Federada (CAFe) <span className="count"></span>
                    </label>
                    <hr />
                    <label className="custom-checkbox">
                        Problemas de acesso ao conteúdo do Portal <span className="count"></span>
                    </label>
                    <hr />
                </div>
                <hr />
                <div className="filter-section">
                    <label className="custom-checkbox">
                        Desenvolvimento das coleções do Portal <span className="count"></span>
                    </label>
                    <hr />
                    <label className="custom-checkbox">
                        Treinamentos <span className="count"></span>
                    </label>
                    <hr />
                    <label className="custom-checkbox">
                        Taxas de Processamento de Artigo no âmbito do PADICT <span className="count"></span>
                    </label>
                </div>
                <hr />
            </aside>
            {/* Main Content */}
            <main className="content">
                <h1 className="filter-title">Perguntas frequentes</h1>
                {questions.map((question, index) => (
                    <div tabIndex={0} key={question.question} className="collapse collapse-arrow border-base-300 bg-base-200 border mb-2">
                        <div className="collapse-title text-xl font-medium botton-answer">{question.question}</div>
                        <div className="collapse-content botton-answer">
                            <p>{question.answer}</p>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    )
}
