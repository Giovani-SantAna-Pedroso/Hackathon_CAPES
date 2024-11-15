const { GoogleGenerativeAI } = require("@google/generative-ai");

export const GET = async () => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(["Explain how AI works"]);

  console.log(result.response.text());

  return Response.json({ msg: "GEMINI api" }, { status: 200 });
};
