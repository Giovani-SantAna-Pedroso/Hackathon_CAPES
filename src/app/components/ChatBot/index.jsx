"use client";
import React, { useState, useEffect, useRef } from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const URL_AI = "/api/ai/gemini/sendChatAText";
// const URL_AI = "http://localhost:3000/api/coletalinks_route";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  // Simula uma mensagem inicial do bot quando o chat é aberto
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            type: "bot",
            text: "Olá, sou a IA do suporte da CAPES, como posso te ajudar",
          },
        ]);
      }, 1000);
    }
  }, [isOpen]);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (text.trim() === "") {
      console.warn("Mensagem vazia não será enviada.");
      return;
    }

    console.log("Mensagem enviada pelo usuário:", text);

    // Adiciona a mensagem do usuário à lista
    setMessages((prev) => [...prev, { type: "user", text }]);

    // Reseta o campo de entrada
    setText("");
    setIsTyping(true);

    try {
      const response = await fetch(URL_AI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        console.log(data);
        throw new Error("Erro ao processar a solicitação");
      }

      const data = await response.json();
      console.log(data);

      if (data && data.text) {
        const botResponse = data.text;
        console.log("Resposta do bot:", botResponse);

        setMessages((prev) => [...prev, { type: "bot", text: botResponse }]);
      } else {
        console.error("Resposta inválida do backend:", data);
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: "Desculpe, não consegui processar sua solicitação.",
          },
        ]);
      }
    } catch (error) {
      console.error("Erro ao obter resposta do bot:", error);
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: "Desculpe, algo deu errado ao processar sua solicitação.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  // Rola automaticamente para a última mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div>
      <div
        className={`fixed bottom-10 right-10 bg-blue-500 text-white rounded-lg shadow-lg cursor-pointer transition-all duration-300 ${
          isOpen
            ? "w-[400px] h-[500px]"
            : "w-[50px] h-[50px] flex items-center justify-center"
        }`}
        onClick={!isOpen ? toggleChat : undefined}
      >
        {!isOpen && (
          <div className="text-2xl">
            <IoChatbubbleEllipsesOutline />
          </div>
        )}

        {isOpen && (
          <div className="flex flex-col h-full p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Fale com o suporte</h2>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                onClick={closeChat}
              >
                Fechar
              </button>
            </div>

            <div className="flex-grow overflow-y-auto bg-gray-100 rounded-lg p-3">
              {messages.map((message, index) => (
                <p
                  key={index}
                  className={`mb-2 p-2 rounded-lg text-black ${
                    message.type === "user"
                      ? "bg-blue-200 text-right"
                      : "bg-gray-300 text-left"
                  }`}
                >
                  {message.text}
                </p>
              ))}

              {isTyping && <p className="italic text-gray-500">Digitando...</p>}
              <div ref={messagesEndRef} />
            </div>

            <form
              onSubmit={handleSendMessage}
              className="mt-4 flex items-center "
            >
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="flex-grow bg-white text-gray-800 rounded-l-lg p-2 focus:outline-none border border-gray-300"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition"
              >
                Enviar
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBot;
