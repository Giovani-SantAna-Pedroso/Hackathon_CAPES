"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IoIosSearch } from "react-icons/io";
import { Poppins } from "next/font/google";
import {
  MdOutlineKeyboardDoubleArrowUp as ArrowUp,
  MdOutlineKeyboardDoubleArrowDown as ArrowDown,
} from "react-icons/md";
import AdvancedSearch from "./AdvancedSearch";
import ModalLogin from "../components/ModalLogin";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});

function Hero() {
  const [inputValue, setInputValue] = useState("");
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    setUser(userInfo);
  }, []);

  const handleSearch = () => {
    console.log(user);
    if (user == null) {
      router.push(`/LoginGove?query=${encodeURIComponent(inputValue)}`);
      return;
    }
    console.log("sadf");
    if (inputValue.trim()) {
      router.push(`/Acervo?query=${encodeURIComponent(inputValue)}`);
    }
  };

  return (
    <div
      className={`${poppins.className} flex flex-col items-center justify-center rounded-xl`}
      style={{
        backgroundImage: `url('/banner.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "450px",
        width: "100%",
      }}
    >
      {showModal && <ModalLogin setShowModal={setShowModal} />}
      <h1 className="text-lg sm:text-xl lg:text-3xl text-white text-center font-extrabold leading-snug px-4 sm:px-6 lg:px-8">
        Aqui você encontra conteúdo científico diversificado <br />
        para deixar sua pesquisa ainda melhor
      </h1>

      <div className="flex flex-col bg-white shadow-lg p-4 sm:p-6 mt-6 sm:mt-8 rounded-lg md:w-full w-[80%] max-w-md sm:max-w-lg lg:max-w-2xl">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <p className="text-gray-800 font-bold text-base sm:text-lg lg:text-xl">
            Olá.
          </p>
          <input
            className="flex-1 w-[90%] px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
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
      </div>
    </div>
  );
}

export default Hero;
