"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Poppins } from "next/font/google";
import {
  MdOutlineKeyboardDoubleArrowUp as ArrowUp,
  MdOutlineKeyboardDoubleArrowDown as ArrowDown,
} from "react-icons/md";
import AdvancedSearch from "./AdvancedSearch";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});

function Hero() {
  const [inputValue, setInputValue] = useState("");
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  const handleSearch = () => {
    alert(`Você procurou por: ${inputValue}`);
  };

  return (
    <div
      className={`${poppins.className} flex flex-col items-center justify-center rounded-xl`}
      style={{
        backgroundImage: `url('/banner.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "350px", // Altura ajustada para telas menores
        minHeight: "450px", // Altura mínima para telas maiores
        width: "100%",
      }}
    >
      {/* Title */}
      <h1 className="text-lg sm:text-xl lg:text-3xl text-white text-center font-extrabold leading-snug px-4 sm:px-6">
        Aqui você encontra conteúdo científico diversificado <br />
        para deixar sua pesquisa ainda melhor
      </h1>

      {/* Search Section */}
      <div className="flex flex-col bg-white shadow-lg p-4 sm:p-6 mt-6 sm:mt-8 rounded-lg w-11/12 max-w-2xl">
        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <p className="text-gray-800 font-bold text-base sm:text-lg lg:text-xl">
            Olá.
          </p>
          <input
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-sm sm:text-base"
            placeholder="O que você está procurando?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="text-blue-600 text-xl sm:text-2xl hover:text-blue-700 transition"
            title="Pesquisar"
          >
            <IoIosSearch />
          </button>
        </div>

        {/* Advanced Search Toggle */}
        <button
          className="mt-4 flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition self-start text-sm sm:text-base"
          onClick={() => setShowAdvancedSearch((current) => !current)}
        >
          Pesquisa Avançada {showAdvancedSearch ? <ArrowUp /> : <ArrowDown />}
        </button>

        {/* Advanced Search Section with Animation */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            showAdvancedSearch
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4">
            <AdvancedSearch
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
