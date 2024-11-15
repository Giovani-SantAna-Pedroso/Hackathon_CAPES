const axios = require('axios');
const fs = require('fs');

import { ColetaLinkDeSite } from "@/Context/Context";

const { GoogleGenerativeAI } = require("@google/generative-ai");

export const GET = async () => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(["ola tuo bem, quem [e voc"]);
  const linkColetado = result.response.text();
  synthesizeText(linkColetado) 


  return Response.json({ msg: linkColetado }, { status: 200 });
};


const url = 'http://localhost:5000/synthesize'; // Endereço da sua API

// Função para enviar texto e receber o áudio
async function synthesizeText(text) {
  try {
    // Faz a requisição POST para a API
    const response = await axios.post(url, { text }, { responseType: 'arraybuffer' });

    // Salva o arquivo de áudio recebido
    fs.writeFileSync('audio/audio.mp3', response.data);

    console.log('Áudio salvo como "audio.mp3"');
  } catch (error) {
    console.error('Erro ao fazer a requisição:', error.response ? error.response.data : error.message);
  }
}

const texto = 'Olá, esse é um exemplo de áudio sintetizado!';

synthesizeText(texto);
