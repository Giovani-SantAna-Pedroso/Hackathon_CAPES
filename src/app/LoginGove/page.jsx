"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/Context/AuthContext"; // Importa o contexto
import styles from "./LoginGove.module.css";

const LoginGove = () => {
  const router = useRouter();
  const { logIn } = useAuth(); // Obtém a função logIn do contexto
  const [cpf, setCpf] = useState("123.456.78");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!cpf) {
      alert("Por favor, insira um CPF válido.");
      return;
    }

    setLoading(true);

    // Simula o tempo de autenticação
    setTimeout(() => {
      // Faz o login e define o usuário no contexto
      logIn({ name: "Kleber Oliveira" }); // Aqui você pode ajustar com o retorno real da API
      router.push("/Usuario");
    }, 500); // Simula um atraso de 1,5 segundos
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
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? "Carregando..." : "Continuar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginGove;
