const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-8b" });

export const POST = async (req, res) => {
  const { message } = await req.json();
  console.log(message);

  const result = await model.generateContent([
    "Categorize o texto a seguir como: ir para pagina; ajuda com suporte; opcao invalida e retorne so o tipo de categoria:" +
      message,
  ]);

  const aiText = result.response.text();

  console.log(aiText);

  return Response.json({ response: aiText }, { status: 200 });
};
