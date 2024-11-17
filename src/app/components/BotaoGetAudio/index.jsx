"use client";
import React, { useState } from "react";
import { urlTSS } from "@/app/utils/urls";
import axios from "axios";

function BotaoGetAudio({ text }) {
  const [audioSrc, setAudioSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleButton = async () => {
    setIsLoading(true);
    console.log("url auido:", urlTSS);
    console.log("text");
    try {
      const response = await axios.post(
        urlTSS + "/synthesize",
        { text: text },
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

  return (
    <div>
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
  );
}

export default BotaoGetAudio;
