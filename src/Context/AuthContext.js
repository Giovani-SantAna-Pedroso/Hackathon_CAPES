"use client"; // Importante no Next.js para habilitar o client-side rendering
import { createContext, useContext, useState } from "react";

// Cria o contexto
const AuthContext = createContext();

// Hook personalizado para consumir o contexto
export const useAuth = () => useContext(AuthContext);

// Provider para envolver a aplicação
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Função para fazer login
  const logIn = (userData) => {
    setUser(userData); // Atualiza o estado do usuário
  };

  // Função para fazer logout
  const logOut = () => {
    setUser(null); // Remove o estado do usuário
  };

  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
