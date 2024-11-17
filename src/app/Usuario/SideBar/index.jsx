"use client";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { TbClick } from "react-icons/tb";
import { IoPersonOutline } from "react-icons/io5";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GoGraph } from "react-icons/go";
function SideBar() {
  const itemNavegation = [
    { name: "Home", link: "/Usuario", icon: <IoHomeOutline /> },
    {
      name: "Pesquisas Salvas",
      link: "/Usuario/favoritos",
      icon: <MdHistory />,
    },
    { name: "Dashboard", link: "/dashboard", icon: <GoGraph /> },
    { name: "Perfil", link: "/Administrativo", icon: <IoPersonOutline /> },
  ];
  return (
    <ol className="text-blue-500 font-medium mr-16 w-1/4 space-y-6 bg-white p-6 rounded-lg shadow-md">
      {itemNavegation.map((item) => (
        <li key={item.name} className="hover:text-blue-700 transition-colors">
          <Link href={item.link}>
            <span className="flex flex-row items-center gap-3">
              <span className="text-2xl">{item.icon}</span>
              {item.name}
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}

export default SideBar;
