"use client";
import React, { useState } from "react";
import { urlTSS } from "@/app/utils/urls"; // Certifique-se que urlTSS está definida corretamente
import axios from "axios";

function BotaoGetAudio({ text }) {
  const [audioSrc, setAudioSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleButton = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        urlTSS + "/synthesize",
        { text: text.substring(0, 1000) },
        {
          responseType: "blob",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const audioURL = URL.createObjectURL(response.data);
      setAudioSrc(audioURL);
    } catch (e) {
      console.error("Error generating audio:", e);
      setError("Erro ao gerar áudio. Tente novamente mais tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {audioSrc ? (
        <audio controls>
          <source src={audioSrc} type="audio/mpeg" />
          Seu navegador não suporta o elemento de áudio.
        </audio>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <button onClick={handleButton} className="btn btn-primary">
          {!isLoading ? "Escutar áudio" : "Carregando..."}
        </button>
      )}
    </div>
  );
}

export default BotaoGetAudio;