"use client";
import { useAuth } from "@/Context/AuthContext"; // Ajuste o caminho conforme necessário
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // Obtém o estado do usuário
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      // Redireciona para a página inicial caso o usuário não esteja logado
      router.push("/");
    }
  }, [user, router]);

  // Renderiza os filhos apenas se o usuário estiver logado
  return user ? children : null;
};

export default ProtectedRoute;