import Image from "next/image";
import React from "react";

function CardArticle({ id, img, conteudo, audioSrc, title = "Título do Artigo" }) {
  return (
    <div className="flex flex-col md:flex-row bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 w-full">
      {/* Imagem */}
      <div className="relative w-full md:w-1/3 h-64 md:h-auto">
        <Image
          src={img}
          alt="Imagem do artigo"
          layout="fill"
          objectFit="cover"
          className="rounded-l-lg"
        />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col justify-between w-full p-6 md:w-2/3">
        {/* Título e ID */}
        <div className="mb-4">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
            Artigo #{id}
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-blue-400 mb-2">
            {title}
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            {conteudo}
          </p>
        </div>

        {/* Player de áudio */}
        {audioSrc && (
          <div className="mt-4">
            <p className="text-gray-400 text-xs mb-1">Ouça o conteúdo:</p>
            <audio controls src={audioSrc} className="w-full rounded">
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardArticle;
