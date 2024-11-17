import { ColetaLinkDeSite } from "@/Context/Context";
const { GoogleGenerativeAI } = require("@google/generative-ai");

export const POST = async (req, res) => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    // Garantir que o corpo da requisição é processado corretamente
    const { text } = req.body;

    // Verificar se o texto foi enviado na requisição
    if (!text) {
      return res.status(400).json({ error: "Dados inválidos" });
    }

    // Criar o prompt com o texto recebido
    const prompt = `${text}`;

    // Gerar o conteúdo usando o modelo
    const result = await model.generateContent(prompt);

    // Verificar se o modelo retornou uma resposta válida
    if (result && result.text) {
      return res.status(200).json({ resposta: result.text });
    } else {
      return res.status(500).json({ error: "Resposta inválida do modelo" });
    }

  } catch (error) {
    console.error("Erro ao gerar conteúdo:", error); // Adicionar log de erro
    return res.status(500).json({ error: "Erro no servidor" });
  }
};
