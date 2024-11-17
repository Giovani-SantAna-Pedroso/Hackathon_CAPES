"use client";
import { IoPerson } from "react-icons/io5";
import { useAuth } from "@/Context/AuthContext";
import { useRouter } from "next/navigation";
import styles from "./GovBar.module.css";

const GovBar = () => {
  const { user, logOut } = useAuth();
  const router = useRouter();

  const handleSair = () => {
    logOut();
    router.push("/");
  };

  return (
    <div className={styles.govBar}>
      {/* Logo e título */}
      <a
        href="https://www.gov.br"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.logoTitle}
      >
        <img
          src="https://www.gov.br/++theme++padrao_govbr/img/govbr-logo-medium.png"
          alt="Gov.br Logo"
          className={styles.logo}
        />
        <span className={styles.title}>Ministério da Educação/CAPES</span>
      </a>

      {/* Links de navegação */}
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <a
              href="https://www.gov.br/pt-br/orgaos-do-governo"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navLink}
            >
              Órgãos do Governo
            </a>
          </li>
          <li>
            <a
              href="https://www.gov.br/acessoainformacao/pt-br"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navLink}
            >
              Acesso à Informação
            </a>
          </li>
          <li>
            <a
              href="https://www4.planalto.gov.br/legislacao"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navLink}
            >
              Legislação
            </a>
          </li>
          <li>
            <a
              href="https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navLink}
            >
              Acessibilidade
            </a>
          </li>
        </ul>
      </nav>

      {/* Botão de login/saída */}
      {user ? (
        <div className={styles.userInfo}>
          <span className={styles.greeting}>Olá, {user.name}</span>
          <button
            onClick={handleSair}
            className={styles.logoutButton}
          >
            Sair
          </button>
        </div>
      ) : (
        <button
          onClick={() => router.push("LoginGove")}
          className={styles.loginButton}
        >
          <IoPerson size={20} />
          <span>Entrar</span>
        </button>
      )}
    </div>
  );
};

export default GovBar;
