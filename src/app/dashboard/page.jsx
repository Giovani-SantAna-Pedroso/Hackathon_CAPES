"use client";

import React from "react";
import styles from "./dashboard.module.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Dashboard = () => {
  // Dados para os gráficos
  const data = {
    artigos: [
      { titulo: "Artigo A", acessos: 150 },
      { titulo: "Artigo B", acessos: 120 },
    ],
    revistas: [
      { nome: "Revista X", acessos: 200 },
      { nome: "Revista Y", acessos: 180 },
    ],
    instituicoes: [
      { nome: "Universidade A", acessos: 300 },
      { nome: "Universidade B", acessos: 250 },
    ],
    estados: [
      { nome: "SP", acessos: 400 },
      { nome: "RJ", acessos: 350 },
    ],
    regioes: [
      { regiao: "Sudeste", acessos: 800 },
      { regiao: "Nordeste", acessos: 600 },
    ],
    graduacao: [
      { nivel: "Graduação", acessos: 1000 },
      { nivel: "Pós-graduação", acessos: 700 },
      { nivel: "Doutorado", acessos: 500 },
    ],
    maisBaixados: [
      { titulo: "Artigo X", downloads: 200 },
      { titulo: "Artigo Y", downloads: 150 },
    ],
    tempoMedio: [
      { periodo: "0-5 min", usuarios: 300 },
      { periodo: "5-10 min", usuarios: 200 },
      { periodo: "10+ min", usuarios: 100 },
    ],
  };

  // Lista de cores para os gráficos
  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

  return (
    <div className={styles.containerDashboard}>
      <div style={{ padding: "20px" }}>
        <h2 className={styles.h2}>Dashboard de Acessos</h2>

        <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "40px" }}>
          {/* Instituições de Ensino */}
         
          <div className={styles.instituicaoDeEnsino}>
            <h3>Instituições de Ensino</h3>
            <PieChart width={400} height={300}>
              <Pie
                data={data.instituicoes}
                dataKey="acessos"
                nameKey="nome"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {data.instituicoes.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>

          {/* Estados */}
          <div className={styles.estados} >
            <h3>Estados</h3>
            <PieChart width={400} height={300}>
              <Pie
                data={data.estados}
                dataKey="acessos"
                nameKey="nome"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {data.estados.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "40px" }}>
          {/* Regiões */}
          <div className={styles.regiao}>
            <h3>Regiões</h3>
            <BarChart width={400} height={300} data={data.regioes}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="regiao" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="acessos" fill="#8884d8" />
            </BarChart>
          </div>

          {/* Nível de Graduação */}
          <div className={styles.graduacao}>
            <h3>Nível de Graduação</h3>
            <BarChart width={400} height={300} data={data.graduacao}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="nivel" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="acessos" fill="#82ca9d" />
            </BarChart>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "40px" }}>
          {/* Artigos Mais Baixados */}
          <div className={styles.baixados}>
            <h3>Artigos Mais Baixados</h3>
            <BarChart width={400} height={300} data={data.maisBaixados}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="titulo" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="downloads" fill="#ffc658" />
            </BarChart>
          </div>

          {/* Tempo Médio na Plataforma */}
          <div className={styles.plataforma}>
            <h3>Tempo Médio na Plataforma</h3>
            <BarChart width={400} height={300} data={data.tempoMedio}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="periodo" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="usuarios" fill="#ff8042" />
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
