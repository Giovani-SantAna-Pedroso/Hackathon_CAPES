import { getPrompt } from "../services/main";

export const POST = async (req) => {
  const { text } = await req.json();
  const textResustado = await getPrompt(text);
  console.log("a");
  return Response.json({ msg: textResustado });
};
