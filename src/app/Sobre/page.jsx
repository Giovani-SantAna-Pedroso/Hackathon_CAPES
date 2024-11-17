import Image from "next/image";

export default function Sobre() {
  return (
    <div className="bg-gray-100">
      <main className="flex justify-center flex-col container min-h-screen mx-auto py-12 px-6">
        {/* Título */}
        <h1 className="text-4xl sm:text-3xl font-bold text-center text-blue-700 mb-8">
          Quem Somos
        </h1>

        {/* Bloco Principal */}
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
          {/* Texto */}
          <div className="md:w-2/3">
            <p className="text-gray-800 leading-relaxed mb-4">
              O{" "}
              <strong className="text-blue-700">
                Portal de Periódicos da CAPES
              </strong>{" "}
              reúne e disponibiliza conteúdos produzidos nacionalmente e outros
              assinados com editoras internacionais a instituições de ensino e
              pesquisa no Brasil. São milhões de periódicos científicos de texto
              completo e conteúdos diversos.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4">
              Criado para reunir conteúdo científico de alta qualidade e
              disponibilizá-lo à comunidade acadêmica brasileira, o Portal visa
              reduzir as assimetrias regionais no acesso à informação
              científica.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4">
              O Portal contribui para o crescimento da produção científica
              nacional e a inovação no País.
            </p>
            <a
              href="#"
              className="text-blue-600 font-medium hover:text-blue-800 hover:underline transition duration-200"
            >
              Leia a cronologia do Portal de Periódicos &rarr;
            </a>
          </div>

          {/* Imagem */}
          <div className="md:w-1/3 flex justify-center">
            <Image
              src="/sober_placeholder.jpg"
              alt="Promoção de Periódicos"
              width={300}
              height={400}
              className="rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Botão */}
        <div className="flex justify-center mt-8">
          <button className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 hover:shadow-lg transition duration-300">
            Saiba Mais
          </button>
        </div>
      </main>
    </div>
  );
}
