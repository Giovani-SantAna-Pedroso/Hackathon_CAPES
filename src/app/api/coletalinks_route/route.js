import { ColetaLinkDeSite } from "@/Context/Context";

const { GoogleGenerativeAI } = require("@google/generative-ai");

export const GET = async () => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent([ColetaLinkDeSite]);
  const linkColetado = result.response.text();
  
  
  return Response.json({ msg: linkColetado }, { status: 200 });
};
