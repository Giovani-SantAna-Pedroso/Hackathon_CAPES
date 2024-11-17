"use client";
import React, { useState } from "react";
import styles from "./Administrativo.module.css"; // Importando o CSS Module

const lista = [
  "Nome completo",
  "Data de nascimento",
  "Sexo",
  "Nacionalidade",
  "CPF",
  "Área de formação",
  "E-mail",
  "Confirma e-mail"
];

const Administrativo = () => {
  const [formData, setFormData] = useState({});
  const [showInputs, setShowInputs] = useState({ username: false, password: false });

  const handleChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value
    });
  };

  const toggleInput = (field) => {
    setShowInputs((prevState) => ({
      ...prevState,
      [field]: !prevState[field]
    }));
  };

  const handleSubmit = (e, field) => {
    e.preventDefault();
    alert(`Dados enviados para ${field}!`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Painel Administrativo</h1>
      <div className={styles.containerPerfil}>
        <button className={styles.conta} aria-label="Acessar Minha Conta">
          Minha Conta
        </button>
        <button className={styles.treinamento} aria-label="Treinamentos cursados">
          Treinamento cursados
        </button>
        <br />
        <h2 className={styles.titleDados}>Dados pessoais</h2>

        {/* Gerando os campos dinamicamente */}
        <form
          className={styles.form}
          onSubmit={(e) => e.preventDefault()} /* Evitar reload na submissão */
        >
          {lista.map((field, index) => (
            <div key={index} className={styles.formGroup}>
              <label className={styles.label} htmlFor={field}>
                {field}:
              </label>
              <br />
              <input
                type="text"
                id={field}
                name={field}
                className={styles.input}
                value={formData[field] || ""}
                onChange={(e) => handleChange(e, field)}
              />
            </div>
          ))}
          <button type="submit" className={styles.submit}>
            Salvar
          </button>
        </form>

        <h2 className={styles.titleDados}>Dados Cadastrais</h2>

        {/* Nome de Usuário */}
        <div className={styles.containerEsqueciSenha}>
          <div
            className={`${styles.animatedInput} ${
              showInputs.username ? styles.visible : styles.hidden
            }`}
          >
            <input
              type="text"
              placeholder="Digite o novo nome de usuário"
              className={styles.input}
            />
            <button
              className={styles.submitSmall}
              onClick={(e) => handleSubmit(e, "Nome de usuário")}
              aria-label="Enviar novo nome de usuário"
            >
              Enviar
            </button>
          </div>
          <p
            className={styles.actionText}
            onClick={() => toggleInput("username")}
          >
            {showInputs.username ? "Fechar" : "Alterar"}
          </p>
        </div>

        {/* Esqueci Minha Senha */}
        <div className={styles.containerEsqueciSenha}>
          <div
            className={`${styles.animatedInput} ${
              showInputs.password ? styles.visible : styles.hidden
            }`}
          >
            <input
              type="password"
              placeholder="Digite a nova senha"
              className={styles.input}
            />
            <button
              className={styles.submitSmall}
              onClick={(e) => handleSubmit(e, "Senha")}
              aria-label="Enviar nova senha"
            >
              Enviar
            </button>
          </div>
          <p
            className={styles.actionText}
            onClick={() => toggleInput("password")}
          >
            {showInputs.password ? "Fechar" : "Esqueci minha senha"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Administrativo;
