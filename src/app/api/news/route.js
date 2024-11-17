import axios from "axios";

export async function GET(request) {
  // Obtém os parâmetros da URL
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  // Valida os parâmetros
  if (!query) {
    return new Response(
      JSON.stringify({ error: "O parâmetro 'query' é obrigatório." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    // Configura a chave de API
    const apiKey = process.env.SERP_API_KEY;

    // Faz a requisição ao SerpApi
    const response = await axios.get("https://serpapi.com/search.json", {
      params: {
        engine: "google_news",
        q: query,
        hl: "en",
        gl: "us",
        api_key: apiKey,
      },
    });

    // Retorna os resultados
    return new Response(JSON.stringify(response.data.news_results || []), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erro ao consultar o SerpApi:", error.message);
    return new Response(
      JSON.stringify({ error: "Erro ao buscar dados no SerpApi." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
