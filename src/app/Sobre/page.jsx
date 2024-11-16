import Image from "next/image";

export default function Sobre() {
  return (
    <div className="bg-gray2">
      <main className="flex justify-center flex-col container min-h-screen  mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Quem Somos
        </h1>

        <div className="bg-white rounded-md shadow-md p-6 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3">
            <p className="text-gray-700 mb-4">
              O <strong>Portal de Periódicos da CAPES</strong> reúne e
              disponibiliza conteúdos produzidos nacionalmente e outros
              assinados com editoras internacionais a instituições de ensino e
              pesquisa no Brasil. São milhões de periódicos científicos de texto
              completo e conteúdos diversos.
            </p>
            <p className="text-gray-700 mb-4">
              Criado para reunir conteúdo científico de alta qualidade e
              disponibilizá-lo à comunidade acadêmica brasileira, o Portal visa
              reduzir as assimetrias regionais no acesso à informação
              científica.
            </p>
            <p className="text-gray-700 mb-4">
              O Portal contribui para o crescimento da produção científica
              nacional e a inovação no País.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Leia a cronologia do Portal de Periódicos
            </a>
          </div>

          <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
            <Image
              src="/sober_placeholder.jpg"
              alt="Promoção de Periódicos"
              width={300}
              height={400}
              className="rounded-md shadow"
            />
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            saiba mais
          </button>
        </div>
      </main>
    </div>
  );
}
