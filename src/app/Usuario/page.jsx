import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { TbClick } from "react-icons/tb";
import { IoPersonOutline } from "react-icons/io5";
import Link from "next/link";
import ContainerArticles from "./ContainerArticles";
import CardArticle from "./CardArticles";

function Usuario() {
  const usuario = "Kleber";
  const itemNavegation = [
    { name: "Home", link: "#", icon: <IoHomeOutline /> },
    { name: "Minhas Pesquisas", link: "#", icon: <MdHistory /> },
    { name: "Descobir", link: "#", icon: <TbClick /> },
    { name: "Perfil", link: "#", icon: <IoPersonOutline /> },
  ];

  const articlesLendo = [
    {
      img: "/placeholder1.png",
      id: 22,
      description: "sdafçlkj  dasf afdsyp fdas qwer dfasm.,qrwe  dsaf ",
    },
    {
      img: "/placeholder1.png",
      id: 21,
      description: "sdafçlkj  dasf afdsyp fdas qwer dfasm.,qrwe  dsaf ",
    },
    {
      img: "/placeholder1.png",
      id: 24,
      description: "sdafçlkj  dasf afdsyp fdas qwer dfasm.,qrwe  dsaf ",
    },
    {
      img: "/placeholder1.png",
      id: 25,
      description: "sdafçlkj  dasf afdsyp fdas qwer dfasm.,qrwe  dsaf ",
    },
  ];

  return (
    <div className="min-h-screen bg-gray2 px-8">
      <h1 className="text-blue2 font-bold text-[68px] text-center py-8">{`Olá ${usuario}, seja bem-vindo`}</h1>
      <div className="flex flex-row">
        {/* side navegation */}
        <ol className="text-blue3 font-bold mr-20">
          {itemNavegation.map((item) => (
            <li key={item.name}>
              <Link href={item.link}>
                <span className="flex flex-row items-center">
                  <span className="mr-2">{item.icon}</span>
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ol>

        {/* Articles */}
        <div className="w-full">
          <h2 className="text-blue1 font-bold text-[32px]">Continuar lendo</h2>
          <ContainerArticles>
            {articlesLendo.map((article) => (
              <div key={article.id} className="my-4">
                <CardArticle
                  id={article.id}
                  conteudo={article.description}
                  img={article.img}
                />
              </div>
            ))}
          </ContainerArticles>

          <h2 className="text-blue1 font-bold text-[32px]">Recomendados</h2>
        </div>
      </div>
    </div>
  );
}

export default Usuario;
