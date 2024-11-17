"use client";

import React from "react";
import styles from "./dashboard.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

const Dashboard = () => {
  const data = {
    artigos: [
      { titulo: "Artigo A", acessos: 150 },
      { titulo: "Artigo B", acessos: 120 },
    ],
    revistas: [
      { nome: "Revista X", acessos: 200 },
      { nome: "Revista Y", acessos: 180 },
    ],
    estados: [
      { nome: "SP", acessos: 400 },
      { nome: "RJ", acessos: 350 },
      { nome: "MG", acessos: 300 },
      { nome: "ES", acessos: 200 },
    ],
    regioes: [
      { regiao: "Sudeste", acessos: 800 },
      { regiao: "Nordeste", acessos: 600 },
      { regiao: "Sul", acessos: 500 },
      { regiao: "Centro-Oeste", acessos: 400 },
      { regiao: "Norte", acessos: 300 },
    ],
    graduacao: [
      { nivel: "Graduação", acessos: 1000 },
      { nivel: "Pós-graduação", acessos: 700 },
      { nivel: "Doutorado", acessos: 500 },
      { nivel: "Pós-Doutorado", acessos: 300 },
      { nivel: "Livre-Docência", acessos: 200 },
    ],
    maisBaixados: [
      { titulo: "Artigo X", downloads: 200 },
      { titulo: "Artigo Y", downloads: 150 },
    ],
    tempoMedio: [
      { periodo: "Jan", usuarios: 300 },
      { periodo: "Feb", usuarios: 200 },
      { periodo: "Mar", usuarios: 250 },
      { periodo: "Apr", usuarios: 180 },
      { periodo: "May", usuarios: 220 },
      { periodo: "Jun", usuarios: 300 },
    ],
  };

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

  return (
    <div className={styles.containerDashboard}>
      <h2 className={styles.h2}>Relatorios e acompanhamentos</h2>

      {/* Destaque: Tempo Médio na Plataforma */}
      <div className={styles.plataforma}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h3 className={styles.titleDash}>Tempo Médio na Plataforma</h3>
            <LineChart width={600} height={400} data={data.tempoMedio}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="periodo" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="usuarios" stroke="#ff8042" strokeWidth={3} />
            </LineChart>
          </div>
          <div className={styles.summaryBox}>
            <h4 >Total de Usuários</h4>
            <p className={styles.summaryValue}>
              {data.tempoMedio.reduce((total, item) => total + item.usuarios, 0)} usuários
            </p>
          </div>
        </div>
      </div>

      {/* Acessos por Estado */}
      <div className={styles.estados}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h3 className={styles.titleDash}>Acessos por Estado</h3>
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
          <div className={styles.summaryBox}>
            <h4>Total de Acessos</h4>
            <p className={styles.summaryValue}>
              {data.estados.reduce((total, item) => total + item.acessos, 0)} acessos
            </p>
          </div>
        </div>
      </div>

      {/* Acessos por Região */}
      <div className={styles.regiao}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h3 className={styles.titleDash}>Acessos por Região</h3>
            <BarChart width={600} height={300} data={data.regioes}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="regiao" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="acessos" fill="#82ca9d" />
            </BarChart>
          </div>
          <div className={styles.summaryBox}>
            <h4>Total de Acessos</h4>
            <p className={styles.summaryValue}>
              {data.regioes.reduce((total, item) => total + item.acessos, 0)} acessos
            </p>
          </div>
        </div>
      </div>

      {/* Outros Gráficos */}
      <div className={styles.baixados}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h3 className={styles.titleDash}>Artigos Mais Baixados</h3>
            <BarChart width={600} height={300} data={data.maisBaixados}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="titulo" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="downloads" fill="#ffc658" />
            </BarChart>
          </div>
          <div className={styles.summaryBox}>
            <h4 >Total de Downloads</h4>
            <p className={styles.summaryValue}>
              {data.maisBaixados.reduce((total, item) => total + item.downloads, 0)} downloads
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
