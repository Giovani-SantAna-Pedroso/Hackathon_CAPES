const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-8b" });

const URL = "http://localhost:3000/";
export const POST = async (req, res) => {
  const { message } = await req.json();
  console.log(message);
  const response = { type: "", text: "jasfdf jas" };

  const result = await model.generateContent([
    "Categorize o texto a seguir como: ir para pagina; ajuda com suporte; opcao invalida e retorne so o tipo de categoria:" +
      message,
  ]);

  response.type = result.response.text();

  if (response.type == "ir para página\n") {
    const result = await model.generateContent([
      "Das paginas: Sobre, Acervo, Treinamentos, Informativos qual o usuario quer ir, me de apenas o nome da pagina" +
        message,
    ]);

    response.text =
      "Você pode acessar essa pagina usando o link: " +
      URL +
      result.response.text();
  }

  console.log(response);

  return Response.json({ ...response }, { status: 200 });
};
