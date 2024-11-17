"use client";
import { useState } from "react";
import React, { createContext, useContext, useState } from "react";

export const ColetaLinkDeSite = `
# Preciso de uma ajuda, faça o papel de um site de busca,
    Esse site contem links? se sim quais links estão relacionados a pesquisas e estudos, me retorne em lista[Titulo:Link]
    caso sejá melhor, me resuma o conteudo de cada link
#Esse site não tem links? só o conteudo de pesquisas? me resuma o site um pouco para ver se realmente vale apena ler o site 
Link:https://www.ncbi.nlm.nih.gov/pmc/?term=%222072-6694%22%5Bjournal%5D
`;

export const VAlidaTexto = `
resuma esse texto e valide as informações, me retorne o resumo dos artigos destaque os pontos principais em um paragrafo:
`;

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData); // Set the user data
  };

  const logout = () => {
    setUser(null); // Clear the user data
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
