const axios = require('axios');
const fs = require('fs');
const url = 'https://converte-textoparaaudio-1.onrender.com/synthesize'; 

import { ColetaLinkDeSite } from "@/Context/Context";

const { GoogleGenerativeAI } = require("@google/generative-ai");

export const GET = async () => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent([ColetaLinkDeSite]);
  const linkColetado = result.response.text();
  synthesizeText("ola") 


  return Response.json({ msg: linkColetado }, { status: 200 });
};









async function synthesizeText(text) {
  try {

    const response = await axios.post(url, { text }, { responseType: 'arraybuffer' });


    fs.writeFileSync('audio/audio.mp3', response.data);

    console.log('Áudio salvo como "audio.mp3"');
  } catch (error) {
    console.error('Erro ao fazer a requisição:', error.response ? error.response.data : error.message);
  }
}

const texto = 'Olá, esse é um exemplo de áudio sintetizado!';

synthesizeText(texto);
