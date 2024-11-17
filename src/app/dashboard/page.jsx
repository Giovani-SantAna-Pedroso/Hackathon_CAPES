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
    tempoMedio: [
      { periodo: "Jan", usuarios: 300 },
      { periodo: "Feb", usuarios: 200 },
      { periodo: "Mar", usuarios: 250 },
      { periodo: "Apr", usuarios: 180 },
      { periodo: "May", usuarios: 220 },
      { periodo: "Jun", usuarios: 300 },
    ],
    maisBaixados: [
      { titulo: "Artigo X", downloads: 200 },
      { titulo: "Artigo Y", downloads: 150 },
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
  };

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

  return (
    <div className={styles.containerDashboard}>
      <h2 className={styles.h2}>Relatórios e Acompanhamentos</h2>
      <div className={styles.dashboardGrid}>
        {/* Tempo Médio na Plataforma */}
        <div className={styles.gridItem}>
          <h3 className={styles.titleDash}>Tempo Médio na Plataforma</h3>
          <LineChart width={300} height={200} data={data.tempoMedio}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="periodo" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="usuarios" stroke="#ff8042" strokeWidth={2} />
          </LineChart>
        </div>

        {/* Artigos Mais Baixados */}
        <div className={styles.gridItem}>
          <h3 className={styles.titleDash}>Artigos Mais Baixados</h3>
          <BarChart width={300} height={200} data={data.maisBaixados}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="titulo" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="downloads" fill="#ffc658" />
          </BarChart>
        </div>

        {/* Acessos por Estado */}
        <div className={styles.gridItem}>
          <h3 className={styles.titleDash}>Acessos por Estado</h3>
          <PieChart width={250} height={250}>
            <Pie
              data={data.estados}
              dataKey="acessos"
              nameKey="nome"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {data.estados.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* Acessos por Região */}
        <div className={styles.gridItem}>
          <h3 className={styles.titleDash}>Acessos por Região</h3>
          <BarChart width={300} height={200} data={data.regioes}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="regiao" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="acessos" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
