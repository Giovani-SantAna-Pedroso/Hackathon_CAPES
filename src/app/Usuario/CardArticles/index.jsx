function CardArticle({ id, img, title, authors, publishedDate, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <img
        src={img}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-bold text-blue-600 mb-2">{title}</h2>
      <p className="text-sm text-gray-700 mb-2">
        <span className="font-semibold">Autor:</span> {authors}
      </p>
      <p className="text-sm text-gray-700 mb-4">
        <span className="font-semibold">Publicado em:</span> {publishedDate}
      </p>
      <p className="text-gray-600 mb-6">
        {description || "Sem resumo disponível."}
      </p>
      <div className="flex gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
          Acessar
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
          Escutar áudio
        </button>
      </div>
    </div>
  );
}

export default CardArticle;
