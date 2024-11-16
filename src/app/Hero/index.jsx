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
  subsets: ["latin"], // Adjust subsets as needed
  weight: ["400", "800", "900", "700"], // Add desired weights
});

function Hero() {
  const [inputValue, setInputValue] = useState("");
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  const handleSearch = () => {
    alert(inputValue);
  };

  return (
    <div
      className={
        poppins.className +
        " flex flex-col items-center justify-center rounded-xl"
      }
      style={{
        backgroundImage: `url('/banner.png')`,
        backgroundSize: "cover", // Makes the image cover the whole div
        backgroundRepeat: "no-repeat", // Prevents repeating
        backgroundPosition: "center", // Centers the image in the div
        height: "400px", // Full viewport height
        width: "100%", // Full width of the parent
      }}
    >
      <h1 className={"text-[26px] text-white text-center font-extrabold "}>
        Aqui você encontra conteúdo cientifico diversificado <br />
        para deixar sua pesquisa ainda melhor
      </h1>
      <div className="flex flex-col bg-white p-2 mt-4 rounded-md min-w-[80%] ">
        <div className="flex items-center justify-between">
          <p className="text-black font-bold text-[30px]">Olá.</p>
          <input
            className="mx-6 rounded p-2 bg-white w-full"
            placeholder="O que você esta procurando? "
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleSearch} className="text-[32px]">
            <IoIosSearch />
          </button>
        </div>

        <button
          className="btn btn-link "
          onClick={() => setShowAdvancedSearch((current) => !current)}
        >
          Pesquisa Avançada {showAdvancedSearch ? <ArrowUp /> : <ArrowDown />}
        </button>

        {showAdvancedSearch ? (
          <AdvancedSearch
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        ) : null}
      </div>
    </div>
  );
}

// const

export default Hero;
