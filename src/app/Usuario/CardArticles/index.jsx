import { urlTSS } from "@/app/utils/urls";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";

function CardArticle({
  id,
  img,
  conteudo,
  // audioSrc,
  title = "Título do Artigo",
}) {
  const [audioSrc, setAudioSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleButton = async () => {
    setIsLoading(true);
    console.log("fdsa");
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/synthesize",
        { text: conteudo },
        {
          responseType: "blob",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const audioURL = URL.createObjectURL(response.data);
      setAudioSrc(audioURL);
    } catch (e) {
      console.log(e);
    }
  };
  const handleTestButton = () => {
    console.log("test");
    console.log(conteudo);
  };

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

        {/* {audioSrc && ( */}
        <div className="mt-4">
          {audioSrc ? (
            <audio controls>
              <source src={audioSrc} type="audio/mpeg" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
          ) : (
            <button onClick={handleButton} className="btn btn-primary">
              {!isLoading ? "Escutar audio" : "Carregando..."}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardArticle;
