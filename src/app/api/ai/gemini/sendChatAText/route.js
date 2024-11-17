const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-8b" });

export const POST = async (req, res) => {
  const { message } = await req.json();
  console.log(message);
  try {
    const response = { type: "", text: "jasfdf jas", error: null };

    const result = await model.generateContent([
      "Aja como um agente de suporte da instituição CAPES, e de respostas curtas para essa mensagem: " +
        message,
    ]);

    response.type = "generic";
    response.text = result.response.text();
  } catch (e) {
    response.error = e;
  }

  // if (response.type == "ir para página\n") {
  //   const result = await model.generateContent([
  //     "Das paginas: Sobre, Acervo, Treinamentos, Informativos qual o usuario quer ir, me de apenas o nome da pagina" +
  //       message,
  //   ]);
  //
  //   response.text =
  //     "Você pode acessar essa pagina usando o link: " +
  //     URL +
  //     result.response.text();
  // }
  //
  // console.log(response);

  return Response.json({ ...response }, { status: 200 });
};
