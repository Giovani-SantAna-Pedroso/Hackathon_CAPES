"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Para navegação
import styles from "./LoginGove.module.css";

const LoginGove = () => {
  const router = useRouter();
  const [cpf, setCpf] = useState("123.456.789-00");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Redireciona para outra página
    router.push(`/Usuario`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <aside className={styles.aside}>
          <img
            src="https://sso.acesso.gov.br/assets/govbr/img/conta_govbr_v2.jpg"
            alt="Identidade Gov.br"
          />
        </aside>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h3>Identifique-se no gov.br com:</h3>
          <label htmlFor="cpf">Número do CPF</label>
          <input
            id="cpf"
            type="text"
            placeholder="Digite seu CPF"
            className={styles.input}
            value={"123.456.78"}
            onChange={(e) => setCpf(e.target.value)} // Atualiza o estado do CPF
          />
          <button type="submit" className={styles.button}>
            Continuar
          </button>
          <div className={styles.otherOptions}>
            <p>Outras opções de identificação:</p>
            <ul>
              <li className={styles.loginbc}>Login com seu banco</li>
              <li>Login com QR code</li>
              <li>Certificado digital</li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginGove;
