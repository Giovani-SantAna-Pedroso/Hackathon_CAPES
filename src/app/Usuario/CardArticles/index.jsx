import Image from "next/image";
import React from "react";

function CardArticle({ id, img, conteudo }) {
  return (
    <div className="flex justify-between text-white items-center flex-row bg-gray1 w-full rounded p-4">
      <Image src={img} alt="artivcle image" width={200} height={200} />
      <div className="w-[60%]">
        <div className="mb-4">
          <p className="font-bold text-[42px]"> #{id}</p>
          <p>{conteudo}</p>
        </div>

        <audio controls src=""></audio>
      </div>
    </div>
  );
}

export default CardArticle;
