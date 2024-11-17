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

  const handleChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Painel Administrativo</h1>
      <div className={styles.containerPerfil}>
        <button className={styles.conta}>Minha Conta</button>
        <button className={styles.treinamento}>Treinamento cursados</button>
        <br></br>
        <h2 className={styles.titleDados}>Dados pessoais</h2>

        {/* Gerando os campos dinamicamente */}
        <form className={styles.form}>
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
      </div>
    </div>
  );
};

export default Administrativo;
