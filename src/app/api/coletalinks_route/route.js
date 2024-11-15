const axios = require('axios');
import { ColetaLinkDeSite } from "@/Context/Context";

const { GoogleGenerativeAI } = require("@google/generative-ai");

export const GET = async () => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(["ola"]);
  const linkColetado = result.response.text();

  convertTextToSpeech("Hello, this is a test!");
  return Response.json({ msg: linkColetado }, { status: 200 });
};



async function convertTextToSpeech(text) {
  try {
    const response = await axios.post('https://api.luvvoice.com/convert', {
      text: text,
      voice: 'pt-BR',
      format: 'mp3', 
    });

    // Processar o áudio retornado
    console.log('Audio URL:', response.data.audio_url);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

